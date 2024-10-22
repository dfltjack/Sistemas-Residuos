import Api from "../helpers/api"

export async function GetPontoColeta(){
    return await Api.get('/pontoscoleta');
}

export async function GetPontoColetaById(id){
    return await Api.get(`/pontoscoleta/${id}`);
}

export async function PostPontoColeta(pontocoleta){
    return await Api.post('/pontoscoleta/postpontoscoleta', pontocoleta);
}

// export async function PutPontoColeta(pontocoleta) {
//     return await Api.put(`/pontoscoleta/putpontoscoleta/${pontocoleta.pontoColetaId}`, pontocoleta);
// }

export async function PutPontoColeta(pontocoleta) {
    return await Api.put('/pontoscoleta/putpontoscoleta', pontocoleta);
}

// export async function PutPontoColeta(pontocoleta) {
//     return await Api.put(`/pontoscoleta/putpontoscoleta/${pontocoleta.pontoColetaId}`, { pontosColetaVM: pontocoleta });
// }

export async function DeletePontoColeta(id){
    return Api.delete(`/pontocoleta/deletepontocoleta/${id}`);
}