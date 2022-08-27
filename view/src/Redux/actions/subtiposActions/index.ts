import { SubtiposDados } from "../../types/subtiposTypes"
export function setAllSubtipos(data:SubtiposDados[]) {
    return {
        type:'GET_ALL_SUBTIPOS',
        payload:data, 
    }
}