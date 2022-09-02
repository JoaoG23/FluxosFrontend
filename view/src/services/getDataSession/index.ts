export function getDataSession() {
    const idConvertido = Number(localStorage.getItem('id'));
    const nomeUsuario = localStorage.getItem('nome');
    const isAdmin = Number(localStorage.getItem('admin'));
    const tokenSessao = localStorage.getItem('token');

     return { idConvertido ,nomeUsuario,  isAdmin , tokenSessao }
}