"use client";
import Image from "next/image";
import { Booking, Lhs1, LoginSignup } from "./components";
import React, { useState } from "react";

export default function Home() {
  const [visLog, SetVisLog] = useState("false");
  const [step, SetStep] = useState(0);
  const changeVisLog = () => {
    SetVisLog("true");
    SetStep(1);
  };

  const [visBook, SetVisBook] = useState("false");
  const changeVisBook = () => {
    SetVisBook("true");
    SetStep(1);
  };
  // console.log(vis);
  return (
    <div>
      <div className="grid grid-flow-col gap-20 h-[100vh] w-[100vw] text-[#eeeeee] bg-[#2121216a]">
        {" "}
        <button
          onClick={changeVisLog}
          className="inset-0 bg-[#0d7dff] px-6 py-2 rounded-full  w-fit h-fit border-2 border-solid border-[#eeeeeee] self-center place-self-end hover:bg-[#3499ff]"
        >
          Login/ SignUp
        </button>{" "}
        <button
          onClick={changeVisBook}
          className="inset-0 bg-[#0d7dff] px-6 py-2 rounded-full w-fit h-fit border-2 border-solid border-[#eeeeeee] self-center place-self-start hover:bg-[#3499ff]"
        >
          Book a Free Session!
        </button>
      </div>
      <LoginSignup
        vis={visLog}
        onClosing={() => {
          SetVisLog("false");
          SetStep(0);
        }}
        onNext={() => {
          SetStep(step + 1);
        }}
        step={step}
      />
      <Booking
        vis={visBook}
        step={step}
        onClosing={() => {
          SetVisBook("false");
          SetStep(0);
        }}
      />
    </div>
  );
}
