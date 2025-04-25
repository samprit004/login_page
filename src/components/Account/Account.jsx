import React from 'react'

const Account = () => {
  return (
    <div className="h-screen w-screen flex justify-center font-Rubik  items-center bg-[#ffffff]">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-gray-300 shadow-lg relative">
        <div className=" flex flex-col   gap-4 w-full">
          
          <div className='flex items-center px-6 bg-white w-full h-16 '>
            <h1 className="text-[18px] font-regular ">
              Account Settings
            </h1>
          </div>

          <div className='flex '>

          <div className='w-[30%] px-4'>
            <div className='relative  '><img src="face.png" alt="" />
            <img className='absolute right-0 bottom-1' src="cam.png" alt="" />
            </div>
          </div>

          <div className='w-[70%] flex flex-col items-start ml-3'>
            <h1 className='text-md font-semibold'>Marry Doe</h1>
            <h1 className='text-sm font-regular'>Marry@Gmail.com </h1>
          </div>

          </div>

          <div className='px-6 mt-2 text-[13px] text-left font-'>
          <div>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
          </div>
          <hr className='bg-[#CBCBCB] border-t opacity-10 border-dashed border ' />

        </div>
        <hr className="absolute bottom-12 left-0 w-full border-t border-dashed border-[#CBCBCB] " />

      </div>
    </div>
  )
}

export default Account
