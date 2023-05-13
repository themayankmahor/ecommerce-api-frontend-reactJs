import React, { useEffect, useState } from 'react'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
import userContext from './UserContext'

const UserProvider = ({children}) => {

    //default value
    const [user, setUser] = useState({
        data:{},
        login: false
    })

    ///
    useEffect(() => {
        setUser({
            data: getCurrentUserDetail(),
            login:isLoggedIn()
        })
    }, [])

  return (
    
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>

  )

}

export default UserProvider;