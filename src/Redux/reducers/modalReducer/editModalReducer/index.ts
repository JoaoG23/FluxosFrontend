import { PayloadAction } from '@reduxjs/toolkit';

export default function editModalReducer(state = false, action:PayloadAction) {
  const { type } = action;
  switch (type) {
    case "EDIT_VISIVEL":
      return true;
    case "EDIT_INVISIVEL":
      return false;
    default:
      return state;
  }
}
