export type InformacaoItem = {
  id_item_fluxo?: number;
  dia_item_fluxo?: number;
  mes_item_fluxo?: number;
  ano_item_fluxo?: number;
  hora_item_fluxo?: string;
  descricao_elementos?: string;
  descricao_subelementos?: string;
  descricao_tipos?: string;
  descricao_subtipos?: string;
  descricao_minitipos?: string;
  descricao_nanotipos?: string;
  descricao_item_fluxo?: string;
  valor_item_fluxo?: number;
  saldo_atual?: number;
};
export type InformacoesItemsStore = {
  fluxo?:{
    items:object[]
  }
};

// ctrl + alt + f = retira aspas 
