import logging
from typing import Dict

logger = logging.getLogger("krishimitra-service-translation")


class TranslationService:
    _local_dictionary: Dict[str, Dict[str, str]] = {
        "hi": {
            "SYSTEM INITIALIZED. Cognitive streams aligned. Ready for multi-vector matrix queries.": "सिस्टम प्रारंभ हो गया। कॉग्निटिव स्ट्रीम्स संरेखित हैं। मल्टी-वेक्टर मैट्रिक्स प्रश्नों के लिए तैयार।",
            "NEGATIVE HEALTH ANOMALY": "कोई बीमारी नहीं पाई गई - स्वास्थ्य इष्टतम है",
            "PATHOGEN MATRIX DETECTED": "रोगज़नक़ मैट्रिक्स का पता चला"
        },
        "te": {
            "SYSTEM INITIALIZED. Cognitive streams aligned. Ready for multi-vector matrix queries.": "సిస్టమ్ ప్రారంభించబడింది. కాగ్నిటివ్ స్ట్రీమ్స్ సమలేఖనం చేయబడ్డాయి. మల్టీ-వెక్టర్ మ్యాట్రిక్స్ ప్రశ్నలకు సిద్ధంగా ఉంది.",
            "NEGATIVE HEALTH ANOMALY": "ఆరోగ్య సమస్యలు లేవు - ఆరోగ్యం సరైనది",
            "PATHOGEN MATRIX DETECTED": "పాథోజెన్ మ్యాట్రిక్స్ కనుగొనబడింది"
        }
    }

    @classmethod
    def translate_phrase(cls, text: str, target_lang: str) -> str:
        if target_lang.lower() == "en":
            return text
        return cls._local_dictionary.get(target_lang.lower(), {}).get(text, text)
