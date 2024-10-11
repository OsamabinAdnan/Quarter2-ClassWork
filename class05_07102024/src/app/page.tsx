'use client'
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      {/* Button which we import from ShadCN UI */}
      <div className="my-10 mx-auto flex justify-center bg-yellow-100">
      <Button onClick={()=>ClickMe('Osama')} className="hover:bg-[#4ee247] hover:text-black font-semibold" variant={"default"}> Click to call Alert</Button>
      </div>
    </>
  );
}
function ClickMe (name:string){
  return(
    alert (`Hello! My name is ${name}`)
  )
}