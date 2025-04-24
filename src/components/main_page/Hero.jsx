import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#ffffff]">
      
      <div className="w-[375px] h-[90%] bg-[#F7F8F9] border-2 border-gray-300 r shadow-lg relative">
        <div className="px-4 flex flex-col gap-8 absolute bottom-10 w-full">
          <div>
            <h1 className="text-3xl font-bold mb-3">Welcome to PopX</h1>
            <p className="text-xl text-gray-500 font-medium">
              Lorem, ipsum dolor sit amet, <br />
              consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-lg font-medium">
            <div className="w-full rounded-lg text-white bg-[#6C25FF] text-center py-2">
              <button>Create account</button>
            </div>
            <div className="w-full rounded-lg bg-[#CEBAFB] text-center py-2">
              <button>Already Registered? Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
