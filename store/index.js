import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./step";
// Redux store configuration with configureStore
const store = configureStore({
  reducer: { step: stepReducer },
});

export default store;
