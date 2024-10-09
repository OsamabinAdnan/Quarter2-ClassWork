'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

export default function About() {
  const route = useRouter()
    return (
    <>
        <div className="max-w-full m-auto">
            <h1 className="text-center my-6 font-semibold text-3xl bg-[#4ee247]">This is About us page</h1>
            <p className="max-w-[1320px] m-auto font-medium text-lg text-justify">
            At [Your Company Name], our mission is to empower individuals and
            organizations through quality information and innovative solutions.
            Founded in [Year], we have grown into a trusted source of knowledge and
            support in our industry. Our dedicated team of professionals is
            passionate about helping our users achieve their goals. We believe in
            the power of community and collaboration, and we are committed to
            providing valuable resources to enhance your experience.
            </p>
            <h2 className="max-w-full m-auto text-center my-6 font-semibold text-xl bg-[#4ee247]">Click below buttons to visit other pages</h2>
            <div>
                <ul className="flex justify-center gap-20">
                    <li><button onClick={()=>route.push(`http://localhost:3000/`)} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Homepage</button></li>
                    <li><button onClick={()=>route.push('/Components/Navbar')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Navbar</button></li>
                    <li><button onClick={()=>route.push('/Components/Contact')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Contact</button></li>
                    <li><button onClick={()=>route.push('/Components/Footer')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Footer</button></li>
                </ul>
            </div>
        </div>
    </>
  )
}
