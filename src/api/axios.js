import axios from "axios"

const api = axios.create({
    baseURL: "http://192.168.15.13:4000",
    timeout: 10000,
})


export default api;