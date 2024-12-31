// Allows us to use Auth from AuthContext

import { useContext } from "react";
import { FontCon, FontContextProps } from "../context/FontProvider";

const useFont = (): FontContextProps => {
    return useContext(FontCon) as FontContextProps;
}

export default useFont;