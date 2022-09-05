import axios from "axios";

function getToken() {
  const tokenEncontrado = localStorage.getItem('token');
  return tokenEncontrado;
}
const urlBase = axios.create({
  // baseURL: "http://192.168.100.7:2001",
  baseURL: "http://localhost:2001",
  headers: {
    "Content-type": "application/json",
    'authorization-token':`${getToken()}`
  },
});


export default urlBase;