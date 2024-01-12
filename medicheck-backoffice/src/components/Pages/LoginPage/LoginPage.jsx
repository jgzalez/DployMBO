import React, { useState } from "react";
import Logo from "../../../assets/LoginLogo.png";
import medicalImg from "../../../assets/loginPortrait.png";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/apiService";


export const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { 
        noDocumento: id, 
        tipoDocumento: "CEDULA", // Replace with actual value or form input
        clave: password 
      };
      
      const response = await login(credentials);
      console.log(response); // Handle the response (e.g., storing auth token)
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., showing an error message)
    }
  };

  return (
    <div className="mt-[10%] w-[100vw] xl:flex xl:mt-0 overflow-hidden">
      <div className="xl:w-[50%] xl:bg-[#F1F5F9] xl:h-[100vh]">
        <div className="flex justify-center items-center gap-1 xl:mt-10 xl:w-[70%] xl:mx-auto xl:my-0 xl:justify-start xl:gap-5 xl:pt-12">
          <img src={Logo} className="w-[60px] xl:w-[129.67px] xl:h-[113px]" />
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
        <form className="w-[80%] mx-auto my-0 xl:w-[50%]" onSubmit={handleSubmit}>
          <label className="block">
            ID
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-[100%] h-[45px] rounded-[7px] border border-solid border-[#D9D9D9] mb-[5%] mt-[2%]"
            />
          </label>
          <label className="block">
            Password
            <input
              type="password" // Changed to 'password' type
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[100%] h-[45px] rounded-[7px] border border-solid border-[#D9D9D9] mb-[3%] mt-[2%]"
            />
          </label>
          <label>
            <input
              type="checkbox"
              className="rounded-[3px] bg-grey-hover mr-1"
            />
            Keep me signed in
            <span className="pl-10 font-semibold">Forgot Password?</span>
          </label>
          <button
            type="submit" // Changed to 'submit' type
            className="w-full h-[45px] bg-black rounded-[7px] text-white mt-8"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-[#A1A8B0] font-semibold text-[12px] mt-16">
          Copyright 2023, Medicheck All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
