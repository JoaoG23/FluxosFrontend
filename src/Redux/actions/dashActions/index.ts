
import { Saldo } from "../../types/dashTypes"

export function setSaldoAtual(data:Saldo[]) {
    return {
        type:'SET_SALDO_ATUAL',
        payload:data,
    }
}
export function setGasto(data:Saldo[]) {
    return {
        type:'SET_GASTO',
        payload:data,
    }
}
export function setGanho(data:Saldo[]) {
    return {
        type:'SET_GANHO',
        payload:data,
    }
}