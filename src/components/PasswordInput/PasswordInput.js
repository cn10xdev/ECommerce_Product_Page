import React, { useState } from "react";
import eye from "../../assets/images/eye.png";
import hidden from "../../assets/images/hidden.png";

export default function PasswordInput({ handleChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" w-full">
      <label className=" relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="p-2 rounded-lg w-full placeholder: italic bg-transparent border border-gray-700 pr-8"
          id={placeholder.split(" ").join("").toLowerCase()}
          required
          onChange={handleChange}
        />
        <img
          alt="mail"
          src={showPassword ? hidden : eye}
          className=" absolute w-5 right-2 top-0 cursor-pointer"
          onClick={handlePasswordClick}
        />
      </label>
    </div>
  );
}
