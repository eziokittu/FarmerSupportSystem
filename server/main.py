from fastapi import FastAPI, File, UploadFile, Request, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from DL_PlantDisease.DL_PlantDisease import preprocess_image, read_image, model_DL_PlantDisease

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to specific origins if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check route
@app.get("/api/working")
def home():
    return {"message": "FastAPI server is running on Hugging Face Spaces!"}

# # Prediction route for DL_CatDog
@app.post("/api/predict1")
async def predict_DL_CatDog(file: UploadFile = File(...)):
    try:
        image = read_image(file)
        preprocessed_image = preprocess_image(image)
        prediction = model_DL_PlantDisease.predict(preprocessed_image)
        predicted_class = "Dog" if np.round(prediction[0][0]) == 1 else "Cat"
        return JSONResponse(content={"ok": 1, "prediction": predicted_class})
    except Exception as e:
        return JSONResponse(content={"ok": -1, "message": f"Something went wrong! {str(e)}"}, status_code=500)

# Prediction route for ML_StudentPerformance
@app.post("/api/predict2")
async def predict_student_performance_api(request: form1):
    print(request, end='\n\n\n\n')
    try:
        # Create the CustomData object
        custom_data = create_custom_data(
            gender= request.gender,
            ethnicity= request.ethnicity,
            parental_level_of_education= request.parental_level_of_education,
            lunch= request.lunch,
            test_preparation_course= request.test_preparation_course,
            reading_score= request.reading_score,
            writing_score= request.writing_score
        )
        # Perform the prediction
        result = predict_student_performance(custom_data)
        return JSONResponse(content={"ok": 1, "prediction": result})
    except Exception as e:
        return JSONResponse(content={"ok": -1, "message": f"Something went wrong! {str(e)}"}, status_code=500)

# Prediction route for ML_DiabetesPrediction
@app.post("/api/predict3")
async def predict_student_performance_api(req: form2):
    try:
        input_data = (req.Pregnancies, req.Glucose, req.BloodPressure, req.SkinThickness, req.Insulin, req.BMI, req.DiabetesPedigreeFunction, req.Age)

        # changing the input_data to numpy array
        input_data_as_numpy_array = np.asarray(input_data)

        # reshape the array as we are predicting for one instance
        input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

        # Perform the prediction
        prediction = model_ML_DiabetesPrediction.predict(input_data_reshaped)[0]
        prediction = int(prediction)

        return JSONResponse(content={"ok": 1, "prediction": prediction})
    except Exception as e:
        return JSONResponse(content={"ok": -1, "message": f"Something went wrong! {str(e)}"}, status_code=500)

# Main function to run the FastAPI server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7860)