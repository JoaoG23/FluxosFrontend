import { PayloadAction } from '@reduxjs/toolkit';

export default function modalReducer(state = false, action:PayloadAction) {
  const { type } = action;
  switch (type) {
    case "VISIVEL":
      return true;
    case "INVISIVEL":
      return false;
    default:
      return state;
  }
}
