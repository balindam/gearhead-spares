import React from 'react'

function useAuth() {

    const [isAuth, setIsAuth] = React.useState(false);

    const login = (username, password) => {
        // TODO: API call to validate the details
        setIsAuth(true);
    }

    const logout = () => {
        // TODO: API call to logout a user (incase we want to maintain active sessions)
        setIsAuth(false);
    }

    const signup = () => {
        // TODO: API call to create a user 
    }

    return {isAuth, login, logout, signup};
}

export default useAuth