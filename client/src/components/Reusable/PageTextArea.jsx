import React from 'react';
import { useNavigate } from 'react-router-dom'

const PageTextArea = ({ heading, body, developedBy, isResult }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-xl w-5/6 md:w-1/2 flex flex-col gap-1 border-t-2 border-gray-200">
      <p className="text-center text-2xl font-bold">{heading}</p>
      {isResult ? (
        <p className='text-center font-bold text-sm'>{body}</p>
      ) : (
        <p className='text-justify text-sm'>{body}</p>
      )}
      {developedBy &&
        <p className='text-right pt-12'
        >Model(s) Developed by -
          <span
            className=' pl-2 font-bold text-xl text-mygreen hover:text-mygreen2 cursor-pointer'
            onClick={() => { navigate('/credits') }}
          >{developedBy}</span>
        </p>
      }
      {isResult && (
        <button
          className='w-full mt-8 bg-mygreen text-white p-2 rounded-lg hover:bg-mygreen2 font-bold transition duration-300'
          onClick={() => {
            // Refresh page after 0.5 s
            setTimeout(() => {
              window.location.reload(false);
            }, 500);
          }}
        >RESET</button>
      )}
    </div>
  )
}

export default PageTextArea;