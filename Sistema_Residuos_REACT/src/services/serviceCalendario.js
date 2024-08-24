import Api from "../helpers/api"

export async function GetCalendario(){
    return await Api.get('/calendario');
}

export async function GetCalendarioById(id){
    return await Api.get(`/calendario/${id}`);
}

export async function PostCalendario(calendario){
    return await Api.post('/calendario/postcalendario', calendario);
}

export async function PutCalendario(calendario){
    return await Api.put('/calendario/putcalendario', calendario);
}

export async function DeleteCalendario(id){
    return Api.delete(`/calendario/deletecalendario/${id}`);
}