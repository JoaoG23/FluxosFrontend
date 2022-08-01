
interface Irequest {
  endpoint:string;
  port:string;
  pathFinal:string
  
}


function request(
    endpoint: string,
    port:string,
    pathFinal:string,
     options:object
    //  e:any

      ):any{
    // e.preventDefault();
    // console.log("Seus dados buscado : " + senha + " " + login);

    // let url = `http://localhost:2001/login`;
    // let dadosInput: DadosUsuario = {
    //   usuario: login,
    //   senha: senha,
    // };

    // const dadosString = JSON.stringify(dadosInput);
    // const options = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: dadosString,
    // };

    fetch(endpoint + port + pathFinal, options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.info(data);
          return data;
          //   setDados(data);
          //   setIsLoaded(true);
          //   showModal();
          //   showOutModal();
        },
        (error) => {
          console.error(error);
            return error;
        //   setIsLoaded(true);
        //   setError(error);
        }
      )
      .catch((error) => console.log(error));
}

export default request;