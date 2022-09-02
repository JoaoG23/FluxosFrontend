import { LoginDadosUsuario } from '../../types/loginTypes'

export function setLogin(data: LoginDadosUsuario) {
    return {
        type:'LOGIN',
        payload:data
    }
}
export function setLogout(data: LoginDadosUsuario) {
    return {
        type:'LOGOUT',
        payload:data
    }
}