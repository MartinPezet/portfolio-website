// Allows us to use Auth from AuthContext

import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useUser = () => {
    return useContext(AuthContext);
}

export default useUser;