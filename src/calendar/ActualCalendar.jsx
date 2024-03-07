import React from "react";
import Datebox from "./Datebox";
import { useSelector } from "react-redux";

const ActualCalendar = () => {
  let d;
  let activeMonth = false;
  // necessary data calculation
  const activeDate = useSelector((store) => store.activeDateCalendar);

  const calendarData = useSelector((store) => store.calendarData);

  const todaysDate = useSelector((store) => store.todaysDate);
  if (activeDate === null || calendarData === null) {
    return <></>;
  }

  // setting starting day and number of days for calander
  let c = activeDate[0];
  c < 10 ? (d = "0" + c.toString()) : (d = c.toString());

  let sday = calendarData[d];
  let a = sday[0]["week_day"];

  let startday = -a - 1;
  let totaldays = Object.entries(sday).length;

  let i = 1;

  if (activeDate[0] === todaysDate.month && activeDate[1] === todaysDate.year) {
    activeMonth = true;
  }

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
                  data={sday}
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
