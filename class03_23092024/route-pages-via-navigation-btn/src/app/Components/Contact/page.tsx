'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Contact() {
    const route = useRouter()
  return (
    <>
        <div className="max-w-full m-auto">
            <h1 className="text-center my-6 font-semibold text-3xl bg-[#4ee247]">This is Contact Us page</h1>
            <p className="max-w-[1320px] m-auto font-medium text-lg text-justify">
                We'd love to hear from you! Whether you have questions, feedback, or
                need support, feel free to reach out to us. You can contact us via email
                at [email@example.com] or fill out the form below. Our team is here to
                assist you and will respond as soon as possible. Thank you for your
                interest in [Your Company Name]!
            </p>
            <h2 className="max-w-full m-auto text-center my-6 font-semibold text-xl bg-[#4ee247]">Click below buttons to visit other pages</h2>
            <div>
                <ul className="flex justify-center gap-20">
                    <li><button onClick={()=>route.push('http://localhost:3000/')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Homepage</button></li>
                    <li><button onClick={()=>route.push('/Components/About')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">About</button></li>
                    <li><button onClick={()=>route.push('/Components/Navbar')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Navbar</button></li>
                    <li><button onClick={()=>route.push('/Components/Footer')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Footer</button></li>
                </ul>
            </div>
        </div>
    </>
  )
}
