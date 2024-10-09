'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Footer() {
    const route = useRouter()
  return (
    <>
        <div className="max-w-full m-auto">
            <h1 className="text-center my-6 font-semibold text-3xl bg-[#4ee247]">This is Footer page</h1>
            <p className="max-w-[1320px] m-auto font-medium text-lg text-justify">
                Thank you for visiting our website! Follow us on social media to stay updated on our latest news and offerings.
            </p>
            <h2 className="max-w-full m-auto text-center my-6 font-semibold text-xl bg-[#4ee247]">Click below buttons to visit other pages</h2>
            <div>
                <ul className="flex justify-center gap-20">
                    <li><button onClick={()=>route.push('http://localhost:3000/')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Homepage</button></li>
                    <li><button onClick={()=>route.push('/Components/About')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">About</button></li>
                    <li><button onClick={()=>route.push('/Components/Navbar')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Navbar</button></li>
                    <li><button onClick={()=>route.push('/Components/Contact')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Contact</button></li>
                </ul>
            </div>
        </div>
    </>
  )
}
