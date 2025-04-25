import React, { useState } from 'react';
import InputBox from './InputBox';
import CustomButton from '../../Button';
import { useNavigate } from 'react-router-dom';

const Create_acc = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [agency, setAgency] = useState(''); 

  const isFormValid =
    fullName &&
    phoneNumber &&
    email &&
    password &&
    companyName &&
    agency;

  const handleCreate = () => {
    if (isFormValid) {
      navigate('/account');
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center font-Rubik  items-center bg-[#ffffff]">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] border-2 border-gray-300 shadow-lg relative">
        <div className="px-4 flex flex-col gap-4 w-full mt-10">
          <div>
            <h1 className="text-2xl text-[#1D2226] font-medium mb-1">
              Create your <br /> PopX account
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <InputBox
              id="fullName"
              label={<>Full Name<span className="ml-1 text-red-600">*</span> </>}
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <InputBox
              id="phoneNumber"
              label={<>Phone Number<span className="ml-1 text-red-600">*</span> </>}
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <InputBox
              id="email"
              label={<>Email Address<span className="ml-1 text-red-600">*</span> </>}
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputBox
              id="password"
              label={<>Password<span className="ml-1 text-red-600">*</span> </>}
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputBox
              id="companyName"
              label={<>Company Name<span className="ml-1 text-red-600">*</span> </>}
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* radio buttons */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-regular text-gray-700">
              Are you an agency? <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-800">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === 'yes'}
                  onChange={(e) => setAgency(e.target.value)}
                  className="appearance-none w-4 h-4 rounded-full border border-gray-400 checked:bg-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-gray-800">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === 'no'}
                  onChange={(e) => setAgency(e.target.value)}
                  className="appearance-none w-4 h-4 rounded-full border border-gray-400 checked:bg-purple-600"
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-4 absolute bottom-10 w-full">
          <CustomButton
            text="Create Account"
            bgColor="bg-[#6C25FF]"
            textColor="text-white"
            onClick={handleCreate}
            disabled={!isFormValid}
          />
        </div>
      </div>
    </div>
  );
};

export default Create_acc;
