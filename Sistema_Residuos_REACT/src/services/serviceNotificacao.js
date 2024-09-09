import Api from "../helpers/api"

export async function GetNotificacao(){
    return await Api.get('/notificacao');
}

export async function GetNotificacaoById(id){
    return await Api.get(`/notificacao/GetNotificacaoById/${id}`);
}

export async function PostNotificacao(notificacao){
    return await Api.post('/notificacao/postnotificacao', notificacao);
}

export async function PutNotificacao(notificacao){
    return await Api.put('/notificacao/putnotificacao', notificacao);
}

export async function DeleteNotificacao(id){
    return Api.delete(`/notificacao/deletenotificacao/${id}`);
}