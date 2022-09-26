import { PayloadAction } from '@reduxjs/toolkit';

export default function addModalReducer(state = false, action:PayloadAction) {
  const { type } = action;
  switch (type) {
    case "ADD_VISIVEL":
      return true;
    case "ADD_INVISIVEL":
      return false;
    default:
      return state;
  }
}
