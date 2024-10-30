import Api from "../helpers/api"

export async function GetTipoResiduo(){
    return await Api.get('/tiporesiduo');
}

export async function GetTipoResiduoById(id){
    return await Api.get(`/tiporesiduo/${id}`);
}

export async function PostTipoResiduo(tiporesiduo) {
    try {
        return await Api.post('/tiporesiduo/posttiporesiduo', tiporesiduo);
    } catch (error) {
        console.error("Erro ao enviar tipo de resíduo:", error.response ? error.response.data : error.message);
        throw error; // Re-lançar o erro para que possa ser tratado onde a função é chamada
    }
}

export async function PutTipoResiduo(tiporesiduo){
    return await Api.put('/tiporesiduo/puttiporesiduo', tiporesiduo);
}


export async function DeleteTipoResiduo(id){
    return Api.delete(`/tiporesiduo/deletetiporesiduo/${id}`);
}