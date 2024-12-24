import { createContext, useState } from "react";

export const Authcontext= createContext();
export const Authcontextprovider = (props)=> {
    const[login,islogin] = useState(true);
    function Toggle() {
        islogin(!login);
    }
    return(
        <Authcontext.Provider value={{login,Toggle}}>
            {props.children}
        </Authcontext.Provider>
    );
}