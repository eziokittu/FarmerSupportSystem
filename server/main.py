from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO

app = FastAPI()

# Add CORS middleware
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],  # You can restrict this to specific origins if needed
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)


# Load your pre-trained model
MODEL_PATH = "./models/model_catdog1.h5"
model = tf.keras.models.load_model(MODEL_PATH)

@app.get("/api/working")
def home():
  return {"message": "FastAPI server is running on Hugging Face Spaces!"}

@app.get("/api/working2")
def greet_somename():
  return {"message": "Hello Bodhisatta, how are you"}
  
# Helper function to read and convert the uploaded image
def read_image(file: UploadFile) -> Image.Image:
  image = Image.open(BytesIO(file.file.read())).convert('RGB')
  return image

# Helper function to preprocess the image
def preprocess_image(image: Image.Image):
  image = image.resize((128, 128))  # Adjust to the size expected by your model
  image = np.array(image) / 255.0  # Normalize the image
  image = np.expand_dims(image, axis=0)  # Add batch dimension
  return image

# Route for classifying image
@app.post("/api/predict1")
async def predict(file: UploadFile = File(...)):
  try:
    # Read and preprocess the image
    image = read_image(file)
    preprocessed_image = preprocess_image(image)

    # Perform prediction
    prediction = model.predict(preprocessed_image)
    predicted_class = "Dog" if np.round(prediction[0][0]) == 1 else "Cat"

    # Return the prediction result
    return JSONResponse(content={"ok": 1, "prediction": predicted_class})
  except Exception as e:
    return JSONResponse(content={"ok": -1, "message": f"Something went wrong! {str(e)}"}, status_code=500)
if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app, host="0.0.0.0", port=7860)