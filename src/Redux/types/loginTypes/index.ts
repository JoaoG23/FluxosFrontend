export type Token = string | null;

export type InfoLoginStore = {
  login?: {
    logar?: object;
    logout?: object;
  };
};

export type LoginDadosUsuario = {
  id?: number;
  usuario?: string;
  admin?: boolean;
  token?:string;
};