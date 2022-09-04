import { NanotiposDados } from "../../types/nanotiposTypes"
export function setAllNanotipos(data:NanotiposDados[]) {
    return {
        type:'GET_ALL_NANOTIPOS',
        payload:data, 
    }
}