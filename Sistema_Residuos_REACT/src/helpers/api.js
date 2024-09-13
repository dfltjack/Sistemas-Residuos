import axios from 'axios';

// Crie uma instância do axios
const Api = axios.create({
    baseURL: 'https://localhost:5000/api', // URL base da sua API
    headers: {
        'Content-Type': 'application/json',
    }
});

// Adicione um interceptor para incluir o token em cada requisição
Api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default Api;

// import axios from "axios";

// var urlBase = "https://localhost:5000/api";
//     const Api = axios.create({
//         baseURL: urlBase
//     })

// export default Api;