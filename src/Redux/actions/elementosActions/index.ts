import { ElementosDados } from "../../types/elementosTypes"
export function setAllElementos(data:ElementosDados[]) {
    return {
        type:'GET_ALL_ELEMENTOS',
        payload:data, 
    }
}