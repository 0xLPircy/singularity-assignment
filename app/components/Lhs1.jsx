import React from "react";
import Image from "next/image";
import lhs1 from "@/assets/lhs1.png";
import logo from "@/assets/logo.png";

const Lhs1 = () => {
  return (
    <div className="bg-[#f0f2f5] rounded-3xl grid grid-flow-row text-center w-[100%] p-6">
      <Image src={logo} height={60} width={180} className="place-self-start" />
      <Image
        src={lhs1}
        height={300}
        width={300}
        className="place-self-center py-16"
      />
      <h1 className="text-3xl place-self-center font-bold">
        kickstart your success in
      </h1>
      <h1 className="text-3xl place-self-center font-bold py-1">
        JEE/NEET/GRADE{" "}
      </h1>
      <h1 className="text-3xl place-self-center font-bold">academics </h1>

      <h1 className="text-3xl font-bold text-[#0d7dff] place-self-center py-3">
        we're here for you.
      </h1>
    </div>
  );
};

export default Lhs1;
