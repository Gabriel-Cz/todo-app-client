import axios from 'axios'

let axiosModule = axios.create({
    baseURL: "http://localhost:8080",
}); 

export default axiosModule;