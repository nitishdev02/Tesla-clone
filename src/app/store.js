import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import TeslaDataSlice from "./DataSlice"
export const store = configureStore({
  reducer: {
    CarData: TeslaDataSlice,
  },
});
