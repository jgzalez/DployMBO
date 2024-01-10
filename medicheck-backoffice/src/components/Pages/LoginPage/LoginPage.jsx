import React from "react";
import Logo from "../../../assets/LoginLogo.png";
import medicalImg from "../../../assets/loginPortrait.png";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="mt-[10%] w-[100vw] xl:flex xl:mt-0 overflow-hidden">
      <div className=" xl:w-[50%] xl:bg-[#F1F5F9] xl:h-[100vh]">
        <div className="flex justify-center items-center gap-1 xl:mt-10 xl:w-[70%] xl:mx-auto xl:my-0 xl:justify-start xl:gap-5 xl:pt-12">
          <img src={Logo} className="w-[60px] xl:w-[129.67px] xl:h-[113px] " />
          <h2 className="font-bold xl:text-[32px] xl:font-bold">Medicheck</h2>
        </div>
        <img
          src={medicalImg}
          className="hidden xl:block ml-[3%] object-scale-down"
        />
      </div>
      <div className="mt-[10%] xl:w-[50%]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold p-4">Sign In</h1>
          <p className="p-3 font-medium">
            Sign in to your account to start using Medicheck admin
          </p>
        </div>
        <form
          className="w-[80%] mx-auto my-0 xl:w-[50%]"
          onSubmit={handleSubmit}
        >
          <label className="block">
            ID
            <input
              type="text"
              className="w-[100%] h-[45px] rounded-[7px] border border-solid border-[##D9D9D9] mb-[5%] mt-[2%]"
            />
          </label>
          <label className="block">
            Password
            <input
              type="text"
              className="w-[100%] h-[45px] rounded-[7px] border border-solid border-[##D9D9D9] mb-[3%] mt-[2%]"
            />
          </label>
          <label>
            <input
              type="checkbox"
              className="rounded-[3px] bg-grey-hover mr-1"
            />
            Keep me sign in
            <span className="pl-10 font-semibold">Forgot Password?</span>
          </label>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full h-[45px] bg-black rounded-[7px] text-white mt-8"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-[#A1A8B0] font-semibold text-[12px] mt-16">
          Copyright 2023, MediCheck All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
