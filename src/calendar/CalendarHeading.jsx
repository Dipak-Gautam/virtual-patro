import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { activeDateCalendarAction } from "../store";

import { constMonths } from "../constants/months";
import { nepaliYears } from "../constants/nepaliYears";

const CalendarHeading = () => {
  const currentDate = useSelector((store) => store.activeDateCalendar);

  if (currentDate[0] === null) {
    console.log("loadingspinner");
    return <></>;
  }
  // year change calculation

  // year change calculation end

  const dispatch = useDispatch();

  let currentMonth = currentDate[0];
  let currentyear = currentDate[1];

  const handleDateChangeNext = (month, year) => {
    let newmonth;
    let newyear;
    if (year === 2082 && month === 12) {
      console.log("Visit and put alert here");
    } else {
      if (month === 12) {
        newmonth = 1;
        newyear = year + 1;
        dispatch(
          activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
        );
      } else {
        newmonth = month + 1;
        newyear = year;
        dispatch(
          activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
        );
      }
    }
  };
  const handleDateChangePrev = (month, year) => {
    let newmonth;
    let newyear;
    if (month === 1 && year === 2075) {
      console.log("visit and put error here");
    } else {
      if (month === 1) {
        newmonth = 12;
        newyear = year - 1;
        dispatch(
          activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
        );
      } else {
        newmonth = month - 1;
        newyear = year;
        dispatch(
          activeDateCalendarAction.setActiveDateCalendar([newmonth, newyear])
        );
      }
    }
  };
  const handleMonthChange = (event) => {
    dispatch(
      activeDateCalendarAction.setActiveDateCalendar([
        event.target.value,
        currentyear,
      ])
    );
  };

  const handelYearChange = (event) => {
    let newYear = Number(event.target.value);

    dispatch(
      activeDateCalendarAction.setActiveDateCalendar([currentMonth, newYear])
    );
  };

  return (
    <>
      <div className="flex justify-between my-4 text-3xl font-semibold text-slate-600 ml-3">
        <div className="flex">
          <div className="w-24 flex items-center justify-center">
            <h1 className="">{constMonths[currentMonth][0]}</h1>
            <select
              className="w-5 font-bold text-xl"
              onChange={handleMonthChange}
            >
              <option value="1">बैशाख</option>
              <option value="2">जेठ</option>
              <option value="3">असार</option>
              <option value="4">श्रावण</option>
              <option value="5">भदौ</option>
              <option value="6">आश्विन</option>
              <option value="7">कार्तिक</option>
              <option value="8">मंसिर</option>
              <option value="9">पुष</option>
              <option value="10">माघ</option>
              <option value="11">फाल्गुन</option>
              <option value="12">चैत्र</option>
            </select>
          </div>

          <h1 className="ml-3">{nepaliYears[currentyear]}</h1>
          <select className="w-5 font-bold text-xl" onChange={handelYearChange}>
            <option value="2075">२०७५</option>
            <option value="2076">२०७६</option>
            <option value="2077">२०७७</option>
            <option value="2078">२०७८</option>
            <option value="2079">२०७९</option>
            <option value="2080">२०८०</option>
            <option value="2081">२०८१</option>
            <option value="2082">२०८२</option>
          </select>
        </div>
        <div>
          <span className="mr-14 text-2xl">{constMonths[currentMonth][1]}</span>
          <button>
            <GrFormPrevious
              className="bg-[#832161] text-white h-full mb-0"
              onClick={() => {
                handleDateChangePrev(currentMonth, currentyear);
              }}
            />
          </button>
          <button>
            <MdOutlineNavigateNext
              className="bg-[#832161] text-white h-full mb-0"
              onClick={() => {
                handleDateChangeNext(currentMonth, currentyear);
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarHeading;
