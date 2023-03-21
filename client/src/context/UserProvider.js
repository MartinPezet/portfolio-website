import {createContext, useState} from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({});

    // User Structure
    // Display Name
    // Name
    // Picture link
    // POSSIBLY Length of session/session expiry date and time

    return(
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
};

export default UserProvider;

export const UserCon = UserContext;