import { PayloadAction } from '@reduxjs/toolkit';

interface TiposState {
  tipo?:object[];
}

const initialState: TiposState = {
  tipo:[]
}



export default function tiposReducer(state = initialState, action: PayloadAction) {
  const { type, payload } = action;
  switch ( type ) {
    case "GET_ALL_TIPOS":
      return {
        ...state,
        tipo: payload,
      };
    default:
      return state;
  }
}
