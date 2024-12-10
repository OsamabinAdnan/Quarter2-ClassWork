'use client'

import { signIn } from "next-auth/react"

export default function SignInPage (){
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={()=>signIn('github')} className="px-4 py-2 border-[2px] bg-black text-white hover:bg-green-700 rounded-xl">Sign In with GitHub</button>
        </div>
    )
}