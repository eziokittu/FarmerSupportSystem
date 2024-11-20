import tensorflow as tf
from fastapi import UploadFile
import numpy as np
from PIL import Image
from io import BytesIO

# Load your pre-trained model
MODEL_PATH = "./DL_PlantDisease/plant_disease_model.h5"
model_DL_PlantDisease = tf.keras.models.load_model(MODEL_PATH)

# Helper function to read and convert the uploaded image
def read_image(file: UploadFile) -> Image.Image:
  image = Image.open(BytesIO(file.file.read())).convert('RGB')
  return image

# Helper function to preprocess the image
def preprocess_image(image: Image.Image):
  image = image.resize((64, 64))  # Adjust to the size expected by your model
  image = np.array(image) / 255.0  # Normalize the image
  image = np.expand_dims(image, axis=0)  # Add batch dimension
  return image