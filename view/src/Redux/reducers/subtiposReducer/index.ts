import { PayloadAction } from '@reduxjs/toolkit';

interface SubtiposState {
  subtipo?:object[];
}

const initialState: SubtiposState = {
  subtipo:[]
}



export default function subtiposReducer(state = initialState, action: PayloadAction) {
  const { type, payload } = action;
  switch ( type ) {
    case "GET_ALL_SUBTIPOS":
      return {
        ...state,
        subtipo: payload,
      };
    default:
      return state;
  }
}
