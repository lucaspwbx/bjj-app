/* eslint arrow-body-style: ["error", "always"] */
import * as types from './actionTypes';

export const addTechnique = (technique) => {
  return {
    technique,
    type: types.ADD_TECHNIQUE,
  };
};

export const setPositionFilter = (position) => {
  return {
    position,
    type: types.SET_POSITION_FILTER,
  };
};
