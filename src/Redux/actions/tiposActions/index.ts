
import { TiposDados } from "../../types/tiposTypes"
export function setAllTipos(data:TiposDados[]) {
    return {
        type:'GET_ALL_TIPOS',
        payload:data, 
    }
}