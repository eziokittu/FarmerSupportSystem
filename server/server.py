from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from tensorflow.keras.utils import img_to_array, load_img
from PIL import Image

app = Flask(__name__)
CORS(app)

PORT = 5000
MODEL_PATH = './models/model_catdog1.h5'

# Load the pre-trained model
model = tf.keras.models.load_model(MODEL_PATH)

# Route to check if server is active
@app.route('/api/working', methods=['GET'])
def workingStatus():
    try:
        return jsonify({'ok': 1, 'message': 'server is active'}), 200
    except Exception as e:
        return jsonify({'ok': -1, 'message': 'server still not active!'}), 500

# Route for classifying image
@app.route('/api/predict1', methods=['POST'])
def classifyImage():
    try:
        # Get the image from the request
        if 'image' not in request.files:
            return jsonify({'ok': -1, 'message': 'No image provided!'}), 400

        file = request.files['image']

        if file.filename == '':
            return jsonify({'ok': -1, 'message': 'No image provided!'}), 400

        # Read image and convert it to the format required by the model
        img = Image.open(file.stream)
        img = img.resize((128, 128))  # Adjust size according to the model
        img = img_to_array(img)
        img = img.reshape((1, 128, 128, 3)) / 255.0  # Normalize pixel values

        # Perform prediction
        result = model.predict(img)
        prediction = 'Dog' if np.round(result[0][0]) == 1 else 'Cat'

        # Return the prediction result
        return jsonify({'ok': 1, 'prediction': prediction}), 200

    except Exception as e:
        return jsonify({'ok': -1, 'message': f'Something went wrong! {str(e)}'}), 500

# Default route
@app.route("/")
def home():
    return f"Running Flask with Cat-Dog Classification! PORT: {PORT}!"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=PORT)
