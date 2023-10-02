import React, { useState, useRef } from "react";
import arrow from "@/assets/arrowIcon.png";
import Image from "next/image";

const OtpRend = ({ onClosing }) => {
  const [otp, SetOtp] = useState(Array(4).fill(""));
  const [btn, SetBtn] = useState(0);

  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    SetOtp(newOtp);

    if (value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    if (index == 3) {
      SetBtn(1);
    } else {
      SetBtn(0);
    }
  };

  const handleSubmit = () => {
    console.log("OTP:", otp.join(""));
  };
  return (
    <>
      <div className="grid grid-flow-col gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            className="text-md py-3 w-[100%] rounded-xl border-2 border-solid border-[#dddddd] spin-button-none text-center"
          />
        ))}
      </div>
      {btn > 0 && (
        <button
          onClick={onClosing}
          className="bg-[#0d7dff] rounded-xl grid grid-flow-col text-md font-bold text-[#eeeeee] py-3 self-end place-self-center w-[100%] mt-72"
        >
          <h6 className="self-center place-self-end">send otp</h6>{" "}
          <Image
            src={arrow}
            height={24}
            width={24}
            className="self-center place-self-start"
          />
        </button>
      )}
      {btn == 0 && (
        <button
          disabled
          className="bg-[#85b9f4] rounded-xl grid grid-flow-col text-md font-bold text-[#eeeeee] py-3 self-end place-self-center w-[100%] mt-72"
        >
          <h6 className="self-center place-self-end">verify otp</h6>{" "}
          <Image
            src={arrow}
            height={24}
            width={24}
            className="self-center place-self-start"
          />
        </button>
      )}
    </>
  );
};

export default OtpRend;
