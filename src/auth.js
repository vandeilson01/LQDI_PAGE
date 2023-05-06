import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:8000/auth/auth",
});
 
// auth.interceptors.request.use(async config => {
//   const token = "";
//   if (token) {
//     auth.defaults.headers.authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default auth;