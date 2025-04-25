import React from 'react';

const InputBox = ({ id, label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute -top-2 left-3 bg-[#F7F8F9] px-1 ${
          id === 'password' ? 'pr-3' : 'pr-3',
          id === 'fullname' ? 'pr-3' : 'pr-3'
        } text-xs font-medium text-[#6C25FF]`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-11 border border-[#CBCBCB] rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
};

export default InputBox;


