import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../../components/OAuth/OAuth.js";
import signInImage from "../../assets/images/signInPageImage.png";
import mail from "../../assets/images/mail.png";
import PasswordInput from "../../components/PasswordInput/PasswordInput.js";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  /* Handling Form Data Changes */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  /* Returning the JSX */
  return (
    <>
      <div className=" w-full h-screen relative shadow-2xl shadow-black-100 flex items-center flex-col lg:flex-row overflow-y-auto no-scrollbar text-n-1">
        <div className="bg-[url('./assets/images/background4.jpg')] opacity-40 w-screen h-screen absolute z-[-10] bg-cover bg-center shadow-inner shadow-black"></div>

        <div className="flex-col w-[80%] pt-[6.75rem] lg:w-[50%] lg:p-12">
          <div className=" uppercase font-bold text-sm mb-3 w-full flex justify-start">
            More than just a reliable e-commerce platform
          </div>
          <div className=" font-extrabold text-3xl mb-3 w-full ">
            <span className="text-first">Welcome Back</span>, now unleash the
            shopper <span className="text-first">inside you</span>, Enjoy your
            dream deals
          </div>
          <div className="w-full flex items-center justify-center lg:justify-start">
            <img
              alt="Sign In"
              src={signInImage}
              className=" w-[90%] lg:w-[60%] "
            />
          </div>
          <div className=" text-[0.7rem] sm:text-xs flex justify-center lg:justify-start w-full">
            Get started with one of the best products
          </div>
        </div>
        <div className="w-[90%] lg:w-[50%] sm:w-[70%] lg:p-12 flex justify-center items-center flex-col">
          <h1 className="text-3xl text-center font-semibold mb-5 text-first">
            Sign In
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[80%] justify-center items-center"
            style={{ color: "#adbbda" }}
          >
            <div className=" w-full">
              <label className=" relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded-lg w-full placeholder: italic bg-transparent border border-gray-700 pr-8"
                  id="email"
                  required
                  onChange={handleChange}
                />
                <img
                  alt="mail"
                  src={mail}
                  className=" absolute w-5 right-2 top-0"
                />
              </label>
            </div>
            <PasswordInput handleChange={handleChange} placeholder="Password" />
            <div className="flex gap-2 mt-1 items-end justify-end w-full text-xs">
              <p>Don't have a account?</p>
              <Link to={"/sign-up"}>
                <span className="text-[#AC6AFF]">Sign Up</span>
              </Link>
            </div>

            <button
              className="text-white p-3 uppercase first-color w-[90%] rounded-full bg-[#AC6AFF] shadow-slate-950 shadow-inner hover:bg-n-8 btn flex items-center justify-center"
              // style={{ color: "#adbbda" }}
            >
              Sign In
            </button>
            <OAuth />
          </form>
        </div>
      </div>
    </>
  );
}
