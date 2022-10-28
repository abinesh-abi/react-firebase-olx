import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)


export const AutheContext = createContext(null)

export default function Context({children}) {
    const [user , setUser] = useState(null)
    return(
        <AutheContext.Provider value={{user,setUser}}> 
        {children}
        </AutheContext.Provider>
    )
}