import { useState } from 'react';
import ImageUpload from '../Reusable/ImageUpload';
import PageTextArea from '../Reusable/PageTextArea';
import FormSubmitButton from '../Reusable/FormSubmitButton';

const Model = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultString, setResultString] = useState('');

  const handleFileSelect = (file) => {
    setSelectedImage(file);  // Save the selected image file to state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) {
      alert('Please select or capture an image!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage); // Ensure the key matches the backend

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/classify`, {
        method: 'POST',
        body: formData,
        headers: {
          // It's generally unnecessary to set `Content-Type` when sending `FormData`, as the browser sets it automatically
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);

      // Assume the result is an array or an object with a prediction field
      const formattedPrediction = result.map((item) => `${item.label}: ${item.score.toFixed(3)}`).join('\n');
      alert(`Prediction: ${formattedPrediction}`);
      setResultString(formattedPrediction);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>

      <PageTextArea
        heading={'Crop Leaf Disease Classification Model'}
        body={'This is a Deep Learning classification model for classifying images of various crop leaves.'}
      />

      {/* Form to handle file upload and submission */}
      <form onSubmit={handleSubmit} className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-xl w-5/6 md:w-1/2 flex flex-col gap-6 border-t-2 border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-center">Upload a crop leaf Image</h2>

        {/* Image Upload Component */}
        <ImageUpload onFileSelect={handleFileSelect} />

        {/* Button - Form Submit */}
        <FormSubmitButton name={'Upload Image'} />
      </form>

      {/* Display the result */}
      {resultString !== '' && (
        <PageTextArea
          heading={'Prediction Result'}
          body={resultString}
          isResult={true}
        />
      )}
    </div>
  );
};

export default Model;
