'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const SignUpForm = () => {
    // State management
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Submission handling
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        console.log("Signup attempt with:", { email, password, confirmPassword })
    }
    return(
        <> 
            <Card className="w-[450px] mx-auto my-auto">
                <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>Enter your detail to create a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            onClick={() => alert('Thanks for signing up!')}
                        >
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}
export default SignUpForm;