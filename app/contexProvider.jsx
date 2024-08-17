'use client'

import supabase from "@/lib/supabase"

const { createContext, useState, useEffect } = require("react")

const userContext = createContext(null)

export { userContext }

const ContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session)=>{
            console.log(event, session)
            if (event === 'SIGNED_OUT') {
                [window.localStorage, window.sessionStorage,].forEach((storage)=>{
                    Object.entries(storage).forEach(([key])=>{
                        storage.removeItem(key)
                    })
                })
            }
        })

        return ()=>{
            subscription.unsubscribe()
        }
    },[])
    return(
        <>
            <userContext.Provider value={{user, setUser}}>
                {children}
            </userContext.Provider>
        </>
    )
}

export default ContextProvider