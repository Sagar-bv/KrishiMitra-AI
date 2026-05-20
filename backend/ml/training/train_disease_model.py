import os
import json
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models, callbacks
from backend.ml.training.dataset_preprocessor import DatasetPreprocessor


def build_convolutional_classifier_architecture(num_classes: int) -> models.Sequential:
    """Instantiate standard multi-layer deep network topology for pathological analysis."""
    model = models.Sequential([
        layers.Input(shape=(224, 224, 3)),
        layers.Conv2D(32, (3, 3), activation='relu', padding='same'),
        layers.BatchNormalization(),
        layers.MaxPooling2D((2, 2)),

        layers.Conv2D(64, (3, 3), activation='relu', padding='same'),
        layers.BatchNormalization(),
        layers.MaxPooling2D((2, 2)),

        layers.Conv2D(128, (3, 3), activation='relu', padding='same'),
        layers.BatchNormalization(),
        layers.MaxPooling2D((2, 2)),

        layers.Flatten(),
        layers.Dense(256, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(num_classes, activation='softmax')
    ])
    return model


def execute_pipeline_training(dataset_path: str, export_model_path: str, indices_json_path: str) -> None:
    preprocessor = DatasetPreprocessor()
    print("Beginning dataset pipeline execution mapping...")
    X, y, mapping = preprocessor.load_and_split_directory_tree(dataset_path)

    # Save categorical definition mapping to local structural cache paths
    inverse_mapping = {str(v): k for k, v in mapping.items()}
    with open(indices_json_path, 'w') as f:
        json.dump(inverse_mapping, f, indent=2)

    num_classes = len(mapping)
    model = build_convolutional_classifier_architecture(num_classes)

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-4),
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )

    monitor_callbacks = [
        callbacks.EarlyStopping(
            monitor='val_loss', patience=5, restore_best_weights=True),
        callbacks.ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3)
    ]

    print(
        f"Dataset arrays loaded. Tensor shapes mapped to memory context: {X.shape}. Initializing training loops.")
    model.fit(
        X, y,
        validation_split=0.2,
        epochs=20,
        batch_size=32,
        callbacks=monitor_callbacks,
        verbose=1
    )

    # Export model weights inside the specified structural path constraints
    os.makedirs(os.path.dirname(export_model_path), exist_ok=True)
    model.save(export_model_path)
    print(
        f"Optimized model weight distribution exported successfully to {export_model_path}")


if __name__ == "__main__":
    # Standard script invocation logic verifying configuration loop components
    execute_pipeline_training(
        dataset_path="backend/ml/training/raw_dataset_payloads",
        export_model_path="backend/ml/models_cache/cnn_disease_v1.h5",
        indices_json_path="backend/ml/models_cache/class_indices.json"
    )
