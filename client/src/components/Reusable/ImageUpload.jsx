import React, { useState } from 'react';

const ImageUpload = ({ onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);  // Send the file back to the parent component
      setPreview(URL.createObjectURL(file));  // Set preview for the selected image
    }
  };

  return (
    <div className='items-center mx-auto'>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2 w-full text-sm"
      />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-full h-auto object-cover rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;