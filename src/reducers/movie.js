import {  } from 'actions';

const initialState = {
  _initial: true,
};

export default function (state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    
    default:
      newState = state;
  }

  return newState;
}
