import { ADD_PLAN } from './types';

export const addPlace = data => {
  console.log('made it to action', data);
  return {
    type: ADD_PLAN,
    payload: data
  };
};
