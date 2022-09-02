import { PayloadAction } from "@reduxjs/toolkit";

export default function loginReducer(state = false, action: PayloadAction) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        state: true,
        dadosUsuario: payload,
      };
    case "LOGOUT":
      return {
        state: false,
        dadosUsuario: payload,
      };
    default:
      return state;
  }
}
