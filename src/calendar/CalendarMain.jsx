import React from "react";
import ActualCalendar from "./ActualCalendar";
import CalendarHeading from "./CalendarHeading";

const CalendarMain = () => {
  return (
    <div>
      <div className="flex w-full h-auto flex-col">
        <CalendarHeading />
        <ActualCalendar />
      </div>
    </div>
  );
};

export default CalendarMain;
