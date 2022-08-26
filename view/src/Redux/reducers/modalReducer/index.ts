

import { Action } from "../../types/modalTypes";
export default function modalReducer(state = false, action:Action) {
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
