import { PayloadAction } from '@reduxjs/toolkit';

interface MinitiposState {
  minitipo?:object[];
}

const initialState: MinitiposState = {
  minitipo:[]
}



export default function minitiposReducer(state = initialState, action: PayloadAction) {
  const { type, payload } = action;
  switch ( type ) {
    case "GET_ALL_MINITIPOS":
      return {
        ...state,
        minitipo: payload,
      };
    default:
      return state;
  }
}
