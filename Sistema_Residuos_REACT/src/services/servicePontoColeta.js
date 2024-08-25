import Api from "../helpers/api"

export async function GetPontoColeta(){
    return await Api.get('/pontocoleta');
}

export async function GetPontoColetaById(id){
    return await Api.get(`/pontocoleta/${id}`);
}

export async function PostPontoColeta(pontocoleta){
    return await Api.post('/pontocoleta/postpontocoleta', pontocoleta);
}

export async function PutPontoColeta(pontocoleta){
    return await Api.put('/pontocoleta/putpontocoleta', pontocoleta);
}

export async function DeletePontoColeta(id){
    return Api.delete(`/pontocoleta/deletepontocoleta/${id}`);
}