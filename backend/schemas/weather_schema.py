from pydantic import BaseModel


class WeatherTelemetry(BaseModel):
    temp: float
    humidity: float
    windSpeed: float


class MicroClimateAdvisory(BaseModel):
    zoneId: str
    evapotranspiration_warning: bool
    suggested_action: str
