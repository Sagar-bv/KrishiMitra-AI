from pydantic import BaseModel


class TreatmentData(BaseModel):
    chemicalProtocol: str
    organicMitigation: str
    preventativeSteps: str


class DiagnosisOutput(BaseModel):
    diseaseName: str
    confidence: float
    healthy: bool
    treatmentBlueprint: TreatmentData
