"use client";
import React, { useState } from "react";
import cross from "@/assets/crossIcon.png";
import Image from "next/image";
import lhs1 from "@/assets/lhs1.png";
import logo from "@/assets/logo.png";
import arrow from "@/assets/arrowIcon.png";
import { Lhs1 } from "@/app/components";

const LoginSignup = ({ vis, onClosing }) => {
  const [num, SetNum] = useState(0);
  const checkArea = (e) => {
    if (e.target.id === "blurArea") {
      onClosing();
    }
  };
  return (
    <>
      {vis == "true" && (
        <div
          className="bg-[#21212198] backdrop-blur-md fixed inset-0 grid"
          onClick={checkArea}
          id="blurArea"
        >
          <div className="bg-[#ffffff] rounded-3xl place-self-center p-6 grid grid-flow-col grid-cols-2 w-[70%]">
            <Lhs1 />
            <div className="grid h-fit">
              <Image
                src={cross}
                height={21}
                width={21}
                onClick={onClosing}
                className="self-start place-self-end"
              />
              <div className="grid grid-flow-row px-20">
                <h1 className="text-2xl font-bold self-start h-fit py-24">
                  drop your number, we've got the rest!
                </h1>
                <form action="" className="grid grid-flow-row h-fit">
                  <label htmlFor="" className="font-light text-sm pb-2">
                    enter your mobile number
                  </label>
                  <div className="grid grid-flow-col border-2 border-solid border-[#cccccc] rounded-xl bg-[#84919f00] w-[100%]">
                    {" "}
                    <select
                      name="dropdown"
                      className="w-fit py-2 rounded-xl self-center place-self-end pl-3"
                    >
                      {countryCodes.map((code) => (
                        <option value={code.dial_code}>{code.dial_code}</option>
                      ))}
                    </select>
                    <h6 className="text-[#d3d6d6] text-2xl font-extralight w-fit">
                      |
                    </h6>
                    <input
                      type="text"
                      placeholder="98xxxxxxxx"
                      className="pl-2 py-2 rounded-xl"
                      onChange={(e) => {
                        SetNum(e.target.value);
                      }}
                    />
                  </div>
                  {num > 0 && (
                    <button className="bg-[#0d7dff] rounded-xl grid grid-flow-col text-md font-bold text-[#eeeeee] py-3 self-end place-self-center w-[100%] mt-72">
                      <h6 className="self-center place-self-end">send otp</h6>{" "}
                      <Image
                        src={arrow}
                        height={24}
                        width={24}
                        className="self-center place-self-start"
                      />
                    </button>
                  )}
                  {num == 0 && (
                    <button
                      disabled
                      className="bg-[#85b9f4] rounded-xl grid grid-flow-col text-md font-bold text-[#eeeeee] py-3 self-end place-self-center w-[100%] mt-72"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;

// used country codes for form - https://gist.github.com/anubhavshrimal/75f6183458db8c453306f93521e93d37#file-countrycodes-json
const countryCodes = [
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
];
