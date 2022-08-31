import type { DadosUsuarioInsercao } from "../UsuarioInsercao";

export type DadosUsuarioInsercaoSemID = Omit<DadosUsuarioInsercao, 'id' >

