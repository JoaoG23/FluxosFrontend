export type Saldo = {
  resposta?: string | number;
};

export type ItemsStore = {
  items?: any | object[];
};

export type dashStore = {
  dashboard?:{
    saldoAtual?: any;
    gasto?:any;
    ganho?:any;
  }
};
