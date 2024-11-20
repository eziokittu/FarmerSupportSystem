import React from "react";

const FormSubmitButton = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 font-bold transition duration-300"
    >
      {name}
    </button>
  );
};

export default FormSubmitButton;