
import { PayloadAction } from '@reduxjs/toolkit';
export default function menuMobileReducer(state = false, action:PayloadAction) {
  const { type } = action;
  switch (type) {
    case "MOSTRAR":
      return true;
    case "ESCONDER":
      return false;
    default:
      return state;
  }
}
