import logging
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base
from backend.core.config import settings

logger = logging.getLogger("krishimitra-db")

engine = create_async_engine(
    settings.DATABASE_URL,
    echo=False,
    pool_size=10,
    max_overflow=20,
    future=True
)

SessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False
)

Base = declarative_base()


async def get_async_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency injection generator providing isolated operational transaction spaces."""
    async with SessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception as e:
            await session.rollback()
            logger.error(
                f"Database transaction layer fault encountered. Rolled back. Info: {str(e)}")
            raise e
        finally:
            await session.close()
