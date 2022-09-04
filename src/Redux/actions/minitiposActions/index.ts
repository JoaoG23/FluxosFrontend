import { MinitiposDados } from "../../types/minitiposTypes"
export function setAllMinitipos(data:MinitiposDados[]) {
    return {
        type:'GET_ALL_MINITIPOS',
        payload:data, 
    }
}