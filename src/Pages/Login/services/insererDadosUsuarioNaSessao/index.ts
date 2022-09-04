export const insererDadosUsuarioNaSessao = (id:number,nome:string, admin:boolean, token:string) => {
    localStorage.setItem("id", JSON.stringify(id) );
    localStorage.setItem("nome", nome );
    localStorage.setItem("admin", JSON.stringify(admin) );
    localStorage.setItem("token", token );
    
  };