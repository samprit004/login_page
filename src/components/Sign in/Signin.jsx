import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Button';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/account');
  };

  const isDisabled = email.trim() === '' || password.trim() === '';

  return (
    <div className="h-screen w-screen flex justify-center font-Rubik  items-center bg-[#ffffff]">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-gray-300 shadow-lg relative">
        <div className="p-4 mt-5 flex flex-col gap-8 w-full">
          <div>
            <h1 className="text-2xl text-[#1D2226] font-medium mb-1">
              Signin to your <br /> PopX account
            </h1>
            <p className="text-md font-regular text-[#1D2226] opacity-60">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit,
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="relative">
              <label
                
                className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 pr-3 text-xs font-medium text-[#6C25FF]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label
                
                className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 pr-5 text-xs font-medium text-[#6C25FF]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full h-12 border border-gray-300 rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Login Button */}
            <CustomButton
              text="Login"
              bgColor={isDisabled ? 'bg-[#CBCBCB]' : 'bg-[#6C25FF]'}
              textColor="text-white"
              onClick={handleLogin}
              disabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
