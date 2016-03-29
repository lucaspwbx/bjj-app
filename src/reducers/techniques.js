import * as types from '../actions/actionTypes';

const initialState = {
  techniques: [],
};

export default function techniques(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_TECHNIQUE:
      return Object.assign({}, state, {
        techniques: [
          ...state.techniques,
          {
            name: action.technique.name,
            description: action.technique.description,
            position: action.technique.position,
          },
        ],
      });
    default:
      return state;
  }
}
