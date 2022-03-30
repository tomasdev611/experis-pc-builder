import { configureStore } from "@reduxjs/toolkit";

import buildReducer from './reducers/buildReducer';

const store = configureStore({
  reducer: {
    build: buildReducer,
  }
});

export default store;