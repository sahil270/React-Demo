import { CONSTANTS } from "../constants";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_TASK:
      return {
        tasks: [...state.tasks, action.result],
      };
    case CONSTANTS.UPDATE_TASK:
      return {
        tasks: state.tasks.map((x) =>
          x.id === action.result?.id ? { ...action.result?.task } : x
        ),
      };
    case CONSTANTS.DELETE_TASK:
      return {
        tasks: state.tasks.filter((x) => x.id !== action.result),
      };
    case CONSTANTS.TOGGLE_COMPLETED:
      return {
        tasks: state.tasks.map((x) =>
          x.id === action.result ? { ...x, isCompleted: !x.isCompleted } : x
        ),
      };
    default:
      return state;
  }
};
