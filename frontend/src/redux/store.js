import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./slices/test";
import userReducer from "./slices/user";
import clientReducer from "./slices/client";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    client: clientReducer
  },
});
