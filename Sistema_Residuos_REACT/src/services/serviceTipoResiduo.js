import Api from "../helpers/api"

export async function GetTipoResiduo(){
    return await Api.get('/tiporesiduo');
}

export async function GetTipoResiduoById(id){
    return await Api.get(`/tiporesiduo/${id}`);
}

export async function PostTipoResiduo(tiporesiduo){
    return await Api.post('/tiporesiduo/posttiporesiduo', tiporesiduo);
}

export async function PutTipoResiduo(tiporesiduo){
    return await Api.put('/tiporesiduo/puttiporesiduo', tiporesiduo);
}

export async function DeleteTipoResiduo(id){
    return Api.delete(`/tiporesiduo/deletetiporesiduo/${id}`);
}