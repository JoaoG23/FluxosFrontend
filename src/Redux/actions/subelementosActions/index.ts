
import { SubelementosDados } from "../../types/subelementosTypes"
export function setAllSubelementos(data:SubelementosDados[]) {
    return {
        type:'GET_ALL',
        payload:data, 
    }
}