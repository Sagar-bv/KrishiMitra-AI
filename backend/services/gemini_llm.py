import logging
from typing import AsyncGenerator
import google.generativeai as genai
from backend.core.config import settings

logger = logging.getLogger("krishimitra-service-gemini")


class GeminiLLMService:
    def __init__(self):
        if settings.GEMINI_API_KEY:
            genai.configure(api_key=settings.GEMINI_API_KEY)
            self.client_ready = True
        else:
            self.client_ready = False

    async def stream_multilingual_chat(self, user_prompt: str, language_code: str = "en") -> AsyncGenerator[str, None]:
        if not self.client_ready:
            yield "SYSTEM ERROR: Neural generative interface API token missing."
            return

        try:
            model = genai.GenerativeModel("gemini-1.5-flash")
            system_instruction = (
                f"You are KrishiMitra, an expert AI agriculture system assistant. Provide professional, concise guidance. "
                f"Target output language variant profile: {language_code}. "
                f"Respond directly to the prompt context specified by the operator."
            )

            response = model.generate_content(
                f"{system_instruction}\nPrompt: {user_prompt}", stream=True)
            for chunk in response:
                if chunk.text:
                    yield chunk.text
        except Exception as e:
            logger.error(
                f"Gemini streaming token iteration breakdown: {str(e)}")
            yield f"Transmission fault inside the cognitive stream cluster layer: {str(e)}"
