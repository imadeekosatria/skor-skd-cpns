'use client'
import { Button } from "@/components/ui/button"
import { getUser, logOut } from "@/lib/supabase"
import { useContext, useEffect } from "react"
import { userContext } from "../contexProvider"

const Page =()=>{
    const {user, setUser} = useContext(userContext)
    console.log(user)
    
    return (
        <>
            <h1>Dashboard</h1>
            <Button onClick={logOut}>Logout</Button>
        </>
    )
}

export default Page