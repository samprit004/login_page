import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Button';

const Hero = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create_acc');
  };

  const handleSignIn = () => {
    navigate('/Signin');
  };

  return (
    <div className="h-screen w-screen flex font-Rubik  justify-center items-center bg-[#ffffff]">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-gray-300 shadow-lg relative">
        <div className="px-4 flex flex-col gap-8 absolute bottom-10 w-full">
          <div>
            <h1 className="text-3xl font-semibold text-[#1D2226] mb-3">Welcome to PopX</h1>
            <p className="text-lg text-[#1D2226] opacity-60 font-medium">
              Lorem, ipsum dolor sit amet, <br />
              consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-lg font-medium">
            <CustomButton
             text="Create account"
             bgColor="bg-[#6C25FF]"
             textColor="text-white"
             onClick={handleCreateAccount}
            />
            <CustomButton
             text="Already Registered? Login"
             bgColor="bg-[#CEBAFB]"
             textColor="text-black"
             onClick={handleSignIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
