import { createContext, useState } from "react";

export const Authcontext= createContext();
export const Authcontextprovider = (props)=> {
    const [switchbutton,setswtichbutton] = useState("Login");
    const[registereduser,isregistereduser] = useState(false);
    function Toggle() {
        isregistereduser(!registereduser);
        setswtichbutton(switchbutton === "Login" ? "Signup" : "Login");
    }
    return(
        <div>
        <Authcontext.Provider value={{ registereduser,Toggle,switchbutton }}>
            {props.children}
        </Authcontext.Provider>
        </div>
    );
}