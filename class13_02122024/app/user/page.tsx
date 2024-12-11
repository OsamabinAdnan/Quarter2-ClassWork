'use client'
import LoginForm from "@/components/loginform";
import SignUpForm from "@/components/signupform";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function User (){
    const [isLogin, setIsLogin] = useState(true)
    const route = useRouter()
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white pt-4">
                <div className=" gap-4 flex flex-col">
                    <Button  onClick={()=>setIsLogin(!isLogin)} className="text-sm bg-white text-black hover:bg-[#4ee247]">
                        {isLogin ? "Need an account? Sign up":"Already have an account? Login"}
                    </Button>
                    <Button className="bg-white text-black hover:bg-[#4ee247]" onClick={()=>route.push('/')}>Back to Homepage</Button>
                </div>
                {isLogin ? <LoginForm /> : <SignUpForm /> }
            </div>
        </>
    )
}