import { PayloadAction } from '@reduxjs/toolkit';

interface SubelementoState {
  subelemento?:object[];
}

const initialState: SubelementoState = {
  subelemento:[]
}



export default function subelementosReducer(state = initialState, action: PayloadAction) {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL":
      return {
        ...state,
        subelemento: payload,
      };
    default:
      return state;
  }
}
