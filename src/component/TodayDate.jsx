import React from "react";
import { useSelector } from "react-redux";
import { weekDays } from "../constants/weekDays";
import { nepaliYears } from "../constants/nepaliYears";
import { nepaliNumber } from "../constants/nepaliNumber";

const TodayDate = () => {
  // const nepalidate = NepaliFunctions.GetCurrentBsDate();
  const nepalidate = useSelector((store) => store.todaysDate);
  const englishDate = new Date();
  const weekday = englishDate.getDay();
  return (
    <div className="p-3">
      <div className="w-full flex flex-col items-center p-3 text-2xl font-bold text-black  ">
        <h1 className="text-2xl font-bold bg-[#832161] text-white w-full p-2 text-center rounded-md my-2">
          आजको मिति:
        </h1>
        <div className=" bg-slate-100 border rounded-md w-full flex ">
          <div className="flex   m-auto  ">
            <p>{nepaliNumber[nepalidate.day]}</p>
            <p> -{nepaliNumber[nepalidate.month]}- </p>
            <p>{nepaliYears[nepalidate.year]}</p>
            <p className="mx-3">{weekDays[weekday]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDate;
