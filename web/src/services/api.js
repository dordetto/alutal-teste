import axios from "axios";

const api = axios.create({
  //baseURL: "https://promotores-backend.herokuapp.com/api"
  baseURL: "http://localhost:3003/",
});

export default api;
