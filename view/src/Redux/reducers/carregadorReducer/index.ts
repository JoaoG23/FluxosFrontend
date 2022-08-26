

export default function carregadorReducer(state = true, action:any) {
  const { type } = action;
  switch (type) {
    case "SET_CARREGANDO":
      return true;
    case "SET_CARREGADO":
      return false;
    default:
      return state;
  }
}
