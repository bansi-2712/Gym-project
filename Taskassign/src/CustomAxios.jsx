import axios from 'axios'
console.log("Backend Base URL:", import.meta.env.VITE_API_BASE_URL);
  export const axiosapi = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials:true
})


