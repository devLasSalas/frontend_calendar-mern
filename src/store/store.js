import { configureStore } from '@reduxjs/toolkit';
// import { calendarSlice } from './calendar/calendarSlice';
// import { uiSlice } from './ui/uiSlice';
 import { calendarSlice, uiSlice } from './'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,    
    calendar: calendarSlice.reducer
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false,
  })
});
