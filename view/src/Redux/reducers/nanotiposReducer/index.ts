import { PayloadAction } from '@reduxjs/toolkit';

interface NanotiposState {
  nanotipo?:object[];
}

const initialState: NanotiposState = {
  nanotipo:[]
}



export default function nanotiposReducer(state = initialState, action: PayloadAction) {
  const { type, payload } = action;
  switch ( type ) {
    case "GET_ALL_NANOTIPOS":
      return {
        ...state,
        nanotipo: payload,
      };
    default:
      return state;
  }
}
