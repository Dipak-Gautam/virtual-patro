import React from "react";

const EventComponent = () => {
  return (
    <div className="w-full p-3 flex flex-col items-center">
      <h1 className="text-2xl font-bold bg-[#832161] text-white w-full p-2 text-center rounded-md">
        आउँदा दिनहरु
      </h1>
      <ul className="w-full">
        <li className="w-full text center bg-slate-200 border border-black text-xl p-2 my-3 rounded-md">
          <h1 className="text-center font-bold underline">Event Name</h1>
          <p className="text-center">event date</p>
          <p className="text-center">event significance</p>
        </li>
        <li className="w-full text center bg-slate-200 border border-black text-xl p-2 my-3 rounded-md">
          <h1 className="text-center font-bold underline">Event Name</h1>
          <p className="text-center">event date</p>
          <p className="text-center">event significance</p>
        </li>
        <li className="w-full text center bg-slate-200 border border-black text-xl p-2 my-3 rounded-md">
          <h1 className="text-center font-bold underline">Event Name</h1>
          <p className="text-center">event date</p>
          <p className="text-center">event significance</p>
        </li>
        <li className="w-full text center bg-slate-200 border border-black text-xl p-2 my-3 rounded-md">
          <h1 className="text-center font-bold underline">Event Name</h1>
          <p className="text-center">event date</p>
          <p className="text-center">event significance</p>
        </li>
      </ul>
    </div>
  );
};

export default EventComponent;
