'use client'
import { signOut } from "next-auth/react";

export default function SignOutPage(){
    return(
        <div>
            <h1>Sign Out</h1>
            <button onClick={() => signOut()} className="px-4 py-2 border-[2px] bg-black text-white hover:bg-red-700 rounded-xl">Sign Out</button>
        </div>
    )
}