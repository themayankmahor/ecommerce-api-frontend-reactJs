import { myAxios } from "./Helper"

export const signup = (user) =>
{
    return myAxios.post(`/auth/user/register`, user).then((response) => response.data);
}