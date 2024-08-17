'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import supabase, { signInWithEmail, getUser } from "@/lib/supabase"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { userContext } from "../contexProvider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Fingerprint } from "lucide-react"



const formSchema = z.object({
    email: z.string().email({message: "Email tidak valid"}),
    password: z.string().min(8, {message: "Kata sandi minimal 8 karakter."})
})

const Page = ()=>{
    const {user, setUser} = useContext(userContext)
    const [loginError, setLoginError] = useState(null)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: "",
            password: ""
        }
    })
    supabase.auth.onAuthStateChange((event, session)=>{
        if (event === 'SIGNED_IN'){
            // window.location.href="/dashboard"
            console.log(session)
        }
    })
    const formSubmit = async (formData)=>{
        const user={
            email: formData.email,
            password: formData.password
        }
        try {
            await signInWithEmail({user})
            
        } catch (error) {
            setLoginError(error.message)
        }
    }
    
    return (
        <>
            <main className="min-h-screen flex flex-col justify-center">
                <Card className="mx-auto max-w-96 lg:w-4/6">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loginError && (
                            <Alert variant="destructive" className="my-2">
                                <Fingerprint className="h-4 w-4"/>
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{loginError}</AlertDescription>
                            </Alert>
                        )}
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(formSubmit)} className="grid gap-4">
                                <FormField control={form.control} name="email" render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="example@mail.com" type="email" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                    
                                )}/>
                                <FormField control={form.control} name="password" render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Kata Sandi</FormLabel>
                                        <FormControl>
                                            <Input placeholder="********" type="password" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                    
                                )}/>
                                <Button type="submit">Login</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </main>
        </>
    )
}

export default Page