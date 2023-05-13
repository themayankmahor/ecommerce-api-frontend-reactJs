import { myAxios } from "./Helper"


///Signup
export const signup = (user) =>
{
    return myAxios.post(`/auth/user/register`, user).then((response) => response.data);
}

///
export const loginUser = (loginDetail) =>
{
    return myAxios.post(`/auth/login`, loginDetail).then((response) => response.data);
}

///
export const getUser = (userId) =>
{
    return myAxios.get(`/user/get-user/${userId}`).then((response) => response.data);
}