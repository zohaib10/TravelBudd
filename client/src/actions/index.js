import { ADD_PLAN, UPDATE_TASK, NEW_CATEGORY } from './types';

export const addPlace = data => {
  return {
    type: ADD_PLAN,
    payload: data
  };
};

export const updateTasks = data => {
  return {
    type: UPDATE_TASK,
    payload: data
  };
};

export const addNewCategory = data => {
  return {
    type: NEW_CATEGORY,
    payload: data
  };
};
