import Api from "../helpers/api";

// Função para fazer login
export async function login(email, password) {
    try {
        const response = await Api.post('/Auth/login', { email, password });
        return response.data; // Retorna os dados da resposta, que incluem o token e o nome do usuário
    } catch (error) {
        throw error; // Lança o erro para ser tratado onde a função for chamada
    }
}

// Função para criar um novo usuário
export async function register(name, email, password) {
    try {
        const response = await Api.post('/User', {
            nome: name,
            email,
            senha: password,
            role: 'cliente' // ou qualquer valor padrão que você deseje
        });
        return response.data; // Retorna os dados da resposta, se necessário
    } catch (error) {
        throw error; // Lança o erro para ser tratado onde a função for chamada
    }
}
