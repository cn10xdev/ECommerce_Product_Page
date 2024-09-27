import React from "react";

export default function OAuthIcon({ socialIcon, handleClick }) {
  return (
    <div
      className={`rounded-full cursor-pointer p-2 shadow-inner shadow-slate-600/90 bg-slate-950 hover:bg-[#AC6AFF]`}
      onClick={handleClick}
    >
      <img alt="icon" src={socialIcon} className=" w-4" />
    </div>
  );
}
