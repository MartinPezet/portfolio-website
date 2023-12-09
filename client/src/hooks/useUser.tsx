// Allows us to use Auth from AuthContext

import { useContext } from "react";
import { UserCon, UserContextProps } from "../context/UserProvider";

const useUser = (): UserContextProps => {
    return useContext(UserCon) as UserContextProps;
}

export default useUser;