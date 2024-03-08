import React from "react";
import Datebox from "./Datebox";
import { useSelector } from "react-redux";
import { nepaliDateData } from "../data/AllYearData";

const ActualCalendar = () => {
  let activeMonth = false;
  // necessary data calculation
  const activeDate = useSelector((store) => store.activeDateCalendar);

  // const calendarData = useSelector((store) => store.calendarData);

  const todaysDate = useSelector((store) => store.todaysDate);
  if (activeDate === null) {
    return <></>;
  }
  let i = 1;

  if (activeDate[0] === todaysDate.month && activeDate[1] === todaysDate.year) {
    activeMonth = true;
  }

  // setting starting day and number of days for calander
  const firstday2080 = 5;
  let sMonth = activeDate[0];
  let sYear = activeDate[1];

  let sYearFirstDay;
  let diffyearsum = firstday2080;
  if (sYear === 2080) {
    sYearFirstDay = 5;
  } else if (sYear > 2080) {
    let diff = sYear - 2080;
    let refyear = 2080;
    for (let j = 0; j < diff; j++) {
      refyear = refyear + 1;

      refyear % 4 == 2
        ? (diffyearsum = diffyearsum + 2)
        : (diffyearsum = diffyearsum + 1);
    }

    sYearFirstDay = diffyearsum % 7;
  } else if (sYear < 2080);
  {
    let diff = 2080 - sYear;
    let refyear = 2080;
    for (let j = 0; j < diff; j++) {
      refyear = refyear - 1;
      refyear % 4 == 1
        ? (diffyearsum = diffyearsum - 2)
        : (diffyearsum = diffyearsum - 1);
    }

    diffyearsum = diffyearsum % 7;
    if (diffyearsum < 0) {
      diffyearsum = diffyearsum + 7;
    }
    sYearFirstDay = diffyearsum;
  }

  console.log(sYearFirstDay);

  let a = 0;

  let startday = -a - 1;
  let totaldays = 30;
  // end of setting starting date

  // calculation box

  // calculation box
  return (
    <div>
      <div>
        <div className="grid grid-cols-7 text-center font-bold h-9">
          <div className="border-2 border-black p-1">आइतबार </div>
          <div className="border-2 border-black p-1">सोमबार </div>
          <div className="border-2 border-black p-1">मङ्गलबार </div>
          <div className="border-2 border-black p-1">बुधबार </div>
          <div className="border-2 border-black p-1">बिहिबार </div>
          <div className="border-2 border-black p-1">शुक्रबार </div>
          <div className="border-2 border-black p-1 text-red-600">शनिबार</div>
        </div>
        {/* dates below */}
        <div className="grid grid-cols-7 text-center font-bold items-center">
          {(() => {
            let post = [];
            while (startday < totaldays - 1) {
              startday++;
              post.push(
                <Datebox
                  key={i}
                  startday={startday}
                  i={i}
                  totaldays={totaldays}
                  cday={todaysDate.day}
                  activeMonth={activeMonth}
                />
              );
              i++;
            }
            return post;
          })()}
        </div>
        {/* dates end here */}
      </div>
    </div>
  );
};

export default ActualCalendar;
