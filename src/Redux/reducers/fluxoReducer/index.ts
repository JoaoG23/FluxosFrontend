const initState = {
  itemInicial: {
    id_item_fluxo: 1,
    dia_item_fluxo: 1,
    mes_item_fluxo: 7,
    ano_item_fluxo: 2022,
    hora_item_fluxo: "00:00:00",
    descricao_elementos: "",
    descricao_subelementos: "",
    descricao_tipos: "",
    descricao_subtipos: "",
    descricao_minitipos: "",
    descricao_nanotipos: "",
    descricao_item_fluxo: "Sem saldo",
    valor_item_fluxo: 0,
    saldo_atual: 0,
  }
};

export default function fluxoReducer(state = initState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_ITEMS":
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
}
