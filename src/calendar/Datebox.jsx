import React from "react";
import { tithi } from "../constants/Tithi";

const Datebox = ({ startday, i, totaldays, data, cday, activeMonth }) => {
  let isholiday = false;
  let stithi;
  let eventstat = null;
  let englishdate;
  let eventName = "";
  let isToday = false;

  if (startday >= 0) {
    stithi = data[startday]["AD_date"]["tithi"];
    englishdate = data[startday]["ad"].split("-")[2];
    eventstat = data[startday]["events"][0]["holiday_status"];
    eventName = data[startday]["events"][0]["jtl"];
  }
  if (i % 7 === 0 || eventstat === 1) {
    isholiday = true;
  }

  if (activeMonth == true && cday == startday + 1) {
    isToday = true;
  }

  return (
    <>
      <div
        className={`h-24 border-2 border-black flex flex-col  ${
          isholiday === true ? "text-red-600" : "text-slate-600"
        } ${isToday == true && "bg-cyan-300 "} `}
      >
        {/* tithi file start */}
        <p className="text-[13px] flex  justify-end">
          <span
            className={`w-full text-center  ${
              (startday >= 0) & (startday < totaldays) ? "block" : "hidden"
            } `}
          >
            {tithi[stithi]}
          </span>

          {/* tithi field end */}

          {/* english date start */}

          <span
            className={`mr-1 ${
              (startday >= 0) & (startday < totaldays) ? "block" : "hidden"
            } `}
          >
            {englishdate}
          </span>

          {/* english date end */}

          {/* main date start */}
        </p>
        <p
          className={`mt-2 mb-1 text-2xl  ${
            isholiday === true ? "text-red-600" : " text-black"
          }  ${(startday >= 0) & (startday < totaldays) ? "block" : "hidden"}`}
        >
          {startday + 1}
        </p>
        {/* main date end */}

        {/* event start */}
        <p
          className={` text-[13px] h-full flex items-end mx-auto leading-none mb-[5px]  ${
            (startday >= 0) & (startday < totaldays) ? "block" : "hidden"
          }`}
        >
          {eventstat == 1 ? eventName : ""}
        </p>
        {/* event end */}
      </div>
    </>
  );
};

export default Datebox;
