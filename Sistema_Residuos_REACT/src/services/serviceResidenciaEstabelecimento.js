import Api from "../helpers/api"

export async function GetResidenciaEstabelecimento(){
    return await Api.get('/residenciaestabelecimento');
}

export async function GetResidenciaEstabelecimentoById(id){
    return await Api.get(`/residenciaestabelecimento/${id}`);
}

export async function PostResidenciaEstabelecimento(residenciaestabelecimento){
    return await Api.post('/residenciaestabelecimento/postresidenciaestabelecimento', residenciaestabelecimento);
}

export async function PutResidenciaEstabelecimento(residenciaestabelecimento){
    return await Api.put('/residenciaestabelecimento/putresidenciaestabelecimento', residenciaestabelecimento);
}

export async function DeleteResidenciaEstabelecimento(id){
    return Api.delete(`/residenciaestabelecimento/deleteresidenciaestabelecimento/${id}`);
}