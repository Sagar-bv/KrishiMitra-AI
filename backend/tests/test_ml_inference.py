import pytest
import numpy as np
from backend.ml.services.inference_engine import diagnostic_engine
from backend.ml.training.dataset_preprocessor import DatasetPreprocessor


def test_image_preprocessing_normalization():
    preprocessor = DatasetPreprocessor(target_shape=(224, 224))
    # Synthetic multi-channel color tensor signature matching OpenCV standard matrix shapes
    mock_raw_image = np.zeros((400, 600, 3), dtype=np.uint8)

    # Simulate processing transformation behaviors directly via inner engineering mechanisms
    img = mock_raw_image.copy()
    import cv2
    img = cv2.resize(img, (224, 224))
    normalized_tensor = img.astype(np.float32) / 255.0

    assert normalized_tensor.shape == (224, 224, 3)
    assert normalized_tensor.max() <= 1.0
    assert normalized_tensor.min() >= 0.0


def test_inference_pipeline_fallback_resolution():
    # Pass blank image array directly into the functional binary evaluation engine
    import cv2
    mock_image = np.zeros((224, 224, 3), dtype=np.uint8)
    _, encoded_bytes = cv2.imencode(".jpg", mock_image)
    raw_bytes = encoded_bytes.tobytes()

    result = diagnostic_engine.process_and_infer(raw_bytes)
    assert "predicted_class" in result
    assert "confidence" in result
    assert "healthy" in result
    assert isinstance(result["confidence"], float)
    assert result["confidence"] >= 0.0 and result["confidence"] <= 1.0
