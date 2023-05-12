///is Logged in
const isLoggedIn = () =>{
    let data = localStorage.getItem("data");

    //
    if (data != null)
    {
        return true;
    }
    else
    {
        return false;
    }

}

///do login => data => save to localstorage
const doLogin = () =>
{
    localStorage.setItem("data", JSON.stringify(data));
    next();
}

///do logout => remove from localstorage
const doLogout = () =>
{
    localStorage.removeItem("data");
    next();
}

///get current user
const getCurrentUserDetail = () =>
{
    //
    if (isLoggedIn())
    {
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else
    {
        return undefined;
    }
}

///get token
const getToken = () =>
{
    //
    if (isLoggedIn())
    {
        return JSON.parse(localStorage.getItem("data")).token;
    }
    else
    {
        return null;
    }
}