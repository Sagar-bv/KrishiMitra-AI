import os
import cv2
import numpy as np
from typing import Tuple, List, Dict


class DatasetPreprocessor:
    def __init__(self, target_shape: Tuple[int, int] = (224, 224)):
        self.target_shape = target_shape

    def process_single_frame(self, image_path: str) -> np.ndarray:
        img = cv2.imread(image_path)
        if img is None:
            raise FileNotFoundError(
                f"Failed to resolve payload binary file context at target location: {image_path}")
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, self.target_shape)
        return img.astype(np.float32) / 255.0

    def load_and_split_directory_tree(self, root_dir: str) -> Tuple[np.ndarray, np.ndarray, Dict[str, int]]:
        """Scan classification structures, construct memory arrays, and map categorical string balances."""
        labels = sorted(os.listdir(root_dir))
        class_map = {label: idx for idx, label in enumerate(labels)}

        images_accumulator = []
        labels_accumulator = []

        for class_name, class_idx in class_map.items():
            class_path = os.path.join(root_dir, class_name)
            if not os.path.isdir(class_path):
                continue
            for img_name in os.listdir(class_path):
                full_path = os.path.join(class_path, img_name)
                try:
                    processed_tensor = self.process_single_frame(full_path)
                    images_accumulator.append(processed_tensor)
                    labels_accumulator.append(class_idx)
                except Exception:
                    continue

        return np.array(images_accumulator), np.array(labels_accumulator), class_map
