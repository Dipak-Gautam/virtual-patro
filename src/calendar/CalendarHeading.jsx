import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { activeDateCalendarAction, calendarDataAction } from "../store";
import d2075 from "../data/2075-calendar.json";
import d2076 from "../data/2076-calendar.json";
import d2077 from "../data/2077-calendar.json";
import d2078 from "../data/2078-calendar.json";
import d2079 from "../data/2079-calendar.json";
import d2080 from "../data/2080-calendar.json";
import d2081 from "../data/2081-calendar.json";
import d2082 from "../data/2082-calendar.json";
import { constMonths } from "../constants/months";
import { nepaliYears } from "../constants/nepaliYears";

const CalendarHeading = () => {
  const currentDate = useSelector((store) => store.activeDateCalendar);

  if (currentDate[0] === null) {
    console.log("loadingspinner");
    return <></>;
  }
  // year change calculation
  const yearchanged = (newyear) => {
    newyear === 2075 && dispatch(calendarDataAction.setCalendarData(d2075));
    newyear === 2076 && dispatch(calendarDataAction.setCalendarData(d2076));
    newyear === 2077 && dispatch(calendarDataAction.setCalendarData(d2077));
    newyear === 2078 && dispatch(calendarDataAction.setCalendarData(d2078));
    newyear === 2079 && dispatch(calendarDataAction.setCalendarData(d2079));
    newyear === 2080 && dispatch(calendarDataAction.setCalendarData(d2080));
    newyear === 2081 && dispatch(calendarDataAction.setCalendarData(d2081));
    newyear === 2082 && dispatch(calendarDataAction.setCalendarData(d2082));
  };
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
        yearchanged(newyear);
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
        yearchanged(newyear);
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
    let newmonth = currentMonth;
    yearchanged(newYear);
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
