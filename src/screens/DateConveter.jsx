import React from "react";
import AD2BS from "../component/AD2BS";
import BS2AD from "../component/BS2AD";

const DateConveter = () => {
  return (
    <div className="mx-12 flex my-12">
      <div className="w-full flex h-auto ">
        <AD2BS />
        <BS2AD />
      </div>
    </div>
  );
};

export default DateConveter;
