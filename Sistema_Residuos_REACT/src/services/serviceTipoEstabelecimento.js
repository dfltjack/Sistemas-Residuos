import Api from "../helpers/api"

export async function GetTipoEstabelecimento(){
    return await Api.get('/tipoestabelecimento');
}

export async function GetTipoEstabelecimentoById(id){
    return await Api.get(`/tipoestabelecimento/${id}`);
}

export async function PostTipoEstabelecimento(tipoestabelecimento){
    return await Api.post('/tipoestabelecimento/posttipoestabelecimento', tipoestabelecimento);
}

export async function PutTipoEstabelecimento(tipoestabelecimento){
    return await Api.put('/tipoestabelecimento/puttipoestabelecimento', tipoestabelecimento);
}

export async function DeleteTipoEstabelecimento(id){
    return Api.delete(`/tipoestabelecimento/deletetipoestabelecimento/${id}`);
}