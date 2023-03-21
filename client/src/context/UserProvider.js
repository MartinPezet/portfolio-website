import {createContext, useState} from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({});

    // User Structure
    // Display Name
    // Name
    // Picture link
    // POSSIBLY Length of session/session expiry date and time

    return(
        <UserContext.Provider value={{ auth, setAuth }}>
            { children }
        </UserContext.Provider>
    )
};

export default UserContext;