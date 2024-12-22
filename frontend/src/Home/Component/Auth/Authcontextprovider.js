import { createContext, useContext, useState } from "react";

export const Authcontext= createContext();
export default function Authcontextprovider({children}) {
    const[login,islogin] = useState(true);
    function Toggle() {
        islogin(!login);
    }
    return(
        <Authcontext.Provider value={{login,Toggle}}>
            {children}
        </Authcontext.Provider>
    );
}