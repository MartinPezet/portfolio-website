// Allows us to use Auth from AuthContext

import { useContext } from "react";
import { UserCon } from "../context/UserProvider";

const useUser = () => {
    return useContext(UserCon);
}

export default useUser;