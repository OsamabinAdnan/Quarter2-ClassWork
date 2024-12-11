'use client'
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const LoginForm = () => {
    // State management
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Submission handling
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempt with:', {email, password});
    }
    return(
        <Card className="w-[450px] mx-auto my-auto">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form action="" onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <Button type="submit" className="w-full" onClick={()=> alert('Thanks for Login')}>Login</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default LoginForm