
import { InformacaoItem } from "../../types/fluxoTypes"
export function setTodosItemsFluxoCaixa(data:InformacaoItem[]) {
    return {
        type:'GET_ALL_ITEMS',
        payload:data, // Retorno do backend.
    }
}