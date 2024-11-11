import Api from "../helpers/api";

// Função para fazer login
export async function login(email, password) {
    try {
        const response = await Api.post('/Auth/login', { email, password });
        return response.data; // Retorna os dados da resposta, que incluem o token e o nome do usuário
    } catch (error) {
        throw error; 
    }
}

// Função para criar um novo usuário
export async function register(name, email, password, role) {
    try {
        const response = await Api.post('/User', {
            nome: name,
            email,
            senha: password,
            role: role, 
        });
        return response.data; 
    } catch (error) {
        throw error; 
    }
}
