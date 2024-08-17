import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function signInWithEmail({user}) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
    })
    if (error) throw error
}


const getUser = async()=>{
    const {data: {user}} = await supabase.auth.getUser()
    // console.log(user)
    return user
}

const logOut = async ()=>{
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

const getSession = async ()=>{
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    console.log(data)
    return data
}

export { signInWithEmail, getUser, logOut, getSession }

export default supabase