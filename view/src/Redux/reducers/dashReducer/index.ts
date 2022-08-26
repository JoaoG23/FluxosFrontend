
const initState = {
  saldoAtual: [],
  gasto: [],
  ganho: [],
};


export default function dashReducer(state = initState, action:any) {
  const { type, payload } = action;
  switch (type) {
    case "SET_SALDO_ATUAL":
      return {
        ...state,
        saldoAtual: payload,
      };
    case "SET_GASTO":
      return {
        ...state,
        gasto: payload,
      };
    case "SET_GANHO":
      return {
        ...state,
        ganho: payload,
      };
    default:
      return state;
  }
}
