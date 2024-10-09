import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
        <h1 className="text-center font-mono font-bold text-5xl bg-[#4ee247] py-3">This is Footer Page</h1>
            <br />
        <h2 className='text-center font-mono font-bold text-xl'>To go to other pages click below</h2>
        <div className=' max-w-full mx-auto bg-black mt-5'>
            <ul className='flex justify-center gap-10 py-5 font-bold text-lg text-white '>
                <li className=' hover:text-yellow-400 ease-in-out'><Link href={'http://localhost:3000/'}>HomePage</Link></li>
                <li className=' hover:text-yellow-400 ease-in-out'><Link href={'/Navbar'}>Navbar</Link></li>
                <li className=' hover:text-yellow-400 ease-in-out'><Link href={'/About'}>About Us</Link></li>
                <li className=' hover:text-yellow-400 ease-in-out'><Link href={'/ContactUs'}>Contact Us</Link></li>
            </ul>
        </div>
    </div>
  )
}
