import { legacy_createStore } from "redux";
import { todoReducer } from "../reducers/TodoReducer";

let initialState = {
  tasks: [
    {
      id: Date.now(),
      message: "Todo Message",
      isCompleted: false,
    },
  ],
};

let store = legacy_createStore(todoReducer, initialState);

export default store;
