import React from "react";
import Image from "next/image";
import lhs21 from "@/assets/lhs21.png";
import lhs22 from "@/assets/lhs22.png";
import logo from "@/assets/logo.png";

const Lhs2 = () => {
  return (
    <div className="bg-[#cbe5ff] rounded-3xl grid grid-flow-row text-left max-w-[100%] w-[100%] py-6 pl-6">
      <Image
        src={logo}
        height={75}
        width={225}
        className="place-self-start pb-3"
      />
      <Image
        src={lhs21}
        height={600}
        width={600}
        className="place-self-center mr-[-90px]"
      />
      <div className="text-3xl self-center place-self-center font-bold pt-12 tracking-wide">
        <h1 className="">your questions</h1>
        <h1 className="py-1">matter doubts? we're</h1>
        <h1 className="">
          here{" "}
          <span className="text-3xl font-bold text-[#0d7dff] place-self-center py-3">
            24/7 to help.
          </span>
        </h1>
      </div>
      <Image
        src={lhs22}
        height={300}
        width={300}
        className="self-center place-self-end pr-12 mt-[-21px] pb-6"
      />
    </div>
  );
};

export default Lhs2;
