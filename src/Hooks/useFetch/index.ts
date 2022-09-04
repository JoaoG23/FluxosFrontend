import { useState, useEffect } from "react";
import axios,{ AxiosRequestConfig }from 'axios';
const api = axios.create({
  baseURL:'http://localhost:2001',
  headers:{
    "Content-type": "application/json"
  }
})


export const useFetch = <T = unknown>(
  options: AxiosRequestConfig 
) => {
  const [dados, setDados] = useState<T | null>(null);
  const [isCarregando, setIsCarregando] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    api(options)
      .then((resp) => {
        console.info(resp);
        setDados(resp.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsCarregando(false);
      });
  }, []);

  return { dados, setDados, isCarregando, error };
};
