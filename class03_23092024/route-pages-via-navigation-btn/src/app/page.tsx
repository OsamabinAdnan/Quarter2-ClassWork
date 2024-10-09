'use client'
import { useRouter } from "next/navigation";
import React from 'react'
import Link from 'next/link'


export default function Home() {
  const route = useRouter()
  return (
    <>
      <div className="max-w-full m-auto">
        <h1 className="text-center my-6 font-semibold text-3xl bg-[#4ee247]">This is Homepage</h1>
        <p className="max-w-[1320px] m-auto font-medium text-lg text-justify">
        Discover a world of possibilities at our platform. We strive to provide
        the best resources, services, and community support for our users.
        Whether you're looking for informative articles, engaging tutorials, or
        the latest news, we have something for everyone. Join us on this journey
        to knowledge and growth, and explore what we have to offer today!
        </p>
        <h2 className="max-w-full m-auto text-center my-6 font-semibold text-xl bg-[#4ee247]">Click below buttons to visit other pages</h2>
        <div>
          <ul className="flex justify-center gap-20">
            <li><button onClick={()=>route.push('/Components/About')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">About</button></li>
            <li><button onClick={()=>route.push('/Components/Navbar')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Navbar</button></li>
            <li><button onClick={()=>route.push('/Components/Contact')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Contact</button></li>
            <li><button onClick={()=>route.push('/Components/Footer')} className="bg-black text-white py-2 px-5 rounded-lg hover:bg-[#4ee247] hover:text-black font-semibold">Footer</button></li>
          </ul>
        </div>
      </div>
    </>
  );
}
