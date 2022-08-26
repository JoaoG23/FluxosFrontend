import axios from "axios";

const urlBase = axios.create({
  baseURL: "http://localhost:2001",
  headers: {
    "Content-type": "application/json",
    'authorization-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiam9hb2RldkBvb28uY29tIiwiYWRtaW4iOjEsImlhdCI6MTY2MTUzMTg1Nn0.ZzDFrjyJWbFmM5xchLfq8EGGB0STmU1ll3zWmTCXdv4'
  },
});


export default urlBase;