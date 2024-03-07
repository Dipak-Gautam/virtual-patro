import { configureStore, createSlice } from "@reduxjs/toolkit";

const todaysDateSlice = createSlice({
  name: "todaysDate",
  initialState: { day: null, month: null, year: null },
  reducers: {
    setTodaysDate: (state, action) => {
      state = action.payload;

      return state;
    },
  },
});

const calendarDataSlice = createSlice({
  name: "calendarData",
  initialState: null,
  reducers: {
    setCalendarData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const activeDateCalendarSlice = createSlice({
  name: "activeDateCalendar",
  initialState: [null, null],
  reducers: {
    setActiveDateCalendar: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const dateStore = configureStore({
  reducer: {
    todaysDate: todaysDateSlice.reducer,
    calendarData: calendarDataSlice.reducer,
    activeDateCalendar: activeDateCalendarSlice.reducer,
  },
});

export const activeDateCalendarAction = activeDateCalendarSlice.actions;
export const calendarDataAction = calendarDataSlice.actions;
export const todaysDateAction = todaysDateSlice.actions;
export default dateStore;
