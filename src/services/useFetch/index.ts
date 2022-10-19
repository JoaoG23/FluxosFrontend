import { useState } from "react";
import { AxiosRequestConfig } from "axios";
// const api = axios.create({
//     baseURL:'http://localhost:2001',
//     headers:{
//       "Content-type": "application/json"
//     }
//   })
import api from "../UrlBase";
  
   const useFetch = async <T = unknown>(
    options: AxiosRequestConfig 
  ) => {
    const [dados, setDados] = useState<T | null>(null);
    const [isCarregando, setIsCarregando] = useState(true);
    const [error, setError] = useState<T | null>(null);
      api(options)
        .then((resp) => {
          setDados(resp.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsCarregando(false);
        });
  
    return { dados, setDados, isCarregando, error };
  };
export default useFetch;

