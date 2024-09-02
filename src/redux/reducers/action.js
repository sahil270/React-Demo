import { CONSTANTS } from "../constants";

const addTask = (task) => {
  return {
    type: CONSTANTS.ADD_TASK,
    result: task,
  };
};

const updateTask = (id, task) => {
  return { type: CONSTANTS.UPDATE_TASK, result: { id, task } };
};

const deleteTask = (id) => {
  return { type: CONSTANTS.DELETE_TASK, result: id };
};

const toggleCompleted = (id) => {
  console.log(id);
  return { type: CONSTANTS.TOGGLE_COMPLETED, result: id };
};

export const todoActions = {
  addTask,
  updateTask,
  deleteTask,
  toggleCompleted,
};
