import axios from "axios";

var urlBase = "https://localhost:5000/api";
    const Api = axios.create({
        baseURL: urlBase
    })

export default Api;