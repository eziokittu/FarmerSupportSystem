from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

PORT = 5000

# Load the existing Hugging Face model
pipe = pipeline("image-classification", model="wambugu71/crop_leaf_diseases_vit")
# pipe2 = pipeline("image-classification", model="Diginsa/Plant-Disease-Detection-Project")
# pipe2 = pipeline("image-classification", model="Ton20/PlantDiseaseDetectorV2")

@app.route('/api/classify', methods=['POST'])
def classify_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    image_file = request.files['image']
    image = Image.open(io.BytesIO(image_file.read()))

    # Run the image through the Hugging Face model
    predictions = pipe(image)

    return jsonify(predictions)
  
# dummy route to check if server is active
@app.route('/api/working', methods=['GET'])
def workingStatus():
    try:
        return jsonify({'ok': 1, 'message': 'server is active'}), 200
    except Exception as e:
        return jsonify({'ok': -1, 'message': 'server still not active!'}), 500
    
# default route
@app.route("/")
def home():
    return f"Running Flask with sentiment analysis! PORT: {PORT}!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
