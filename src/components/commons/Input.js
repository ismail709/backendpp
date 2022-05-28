import React from "react";

function Input(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        className="w-full text-xl outline-none focus:outline-[#3ea6ff] focus:outline-1 placeholder:italic placeholder:font-light border-[1px] border-gray-400"
        {...props}
      />
    </>
  );
}

export default Input;
