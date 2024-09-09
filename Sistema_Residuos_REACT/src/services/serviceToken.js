import Api from "../helpers/api";

export async function SaveToken(token) {
    return await Api.post('/SaveToken', { token });
}
