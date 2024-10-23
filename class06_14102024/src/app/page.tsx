'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input"


export default function Home() {
  //useState to handle event
  const [likes,setLikes] = useState(0)
  
  // Destruction of object
  let obj = {
    fullName:'Osama bin Adnan',
    age:35
  }
  const {fullName,age} = obj

  //Controlled Component
  const [value, SetValue] = useState('')
  return (
    <>
     {/* Event Handling using State */}
    <div className="max-w-[1980px] mx-auto py-[50px] px-[50px] ">
    <h1 className="text-[80px] font-bold">Counter</h1>
    <p className="text-[30px] font-bold">Likes = {likes}</p>
       <Button variant='default' onClick={()=>{
      setLikes(likes+1)
    }} className="bg-green-700 hover:bg-green-900">Click to increase by one</Button>
    <Button variant='destructive' onClick={()=>{
      setLikes(likes-1)
    }} className="ml-[20px]">Click to decrease by one</Button>
    </div>
    {/* Controlled Components */}
  
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" onChange={(event)=>SetValue(event.target.value)} value={value} />
      <Button type="submit">Subscribe</Button>
      </div>
    </>
  );
}
