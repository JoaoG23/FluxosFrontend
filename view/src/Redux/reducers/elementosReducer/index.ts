import { PayloadAction } from '@reduxjs/toolkit';

interface ElementoState {
  elemento?:object[];
}

const initialState: ElementoState = {
  elemento:[]
}



export default function elementoReducer(state = initialState, action: PayloadAction) {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_ELEMENTOS":
      return {
        ...state,
        elemento: payload,
      };
    default:
      return state;
  }
}
