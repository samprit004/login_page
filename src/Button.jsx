import React from 'react';

const CustomButton = ({ text, textsize, bgColor, textColor, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg text-center py-3 ${bgColor} ${textColor} ${textsize} ${
        disabled ? 'bg-[#CBCBCB] cursor-not-allowed' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
