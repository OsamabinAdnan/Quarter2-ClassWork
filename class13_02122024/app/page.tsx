'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";

export default function Home() {
  const route = useRouter()

  return (
    <>
    <div className="max-w-full mx-auto shadow-lg">
      <div className="flex max-w-[1440px] justify-between items-center mx-auto p-4  ">
          <h1 className="text-[35px] font-bold">Homepage</h1>
          <Button className="hover:bg-[#4ee247] hover:text-black" onClick={()=>route.push('/user')}><User2Icon /></Button>
      </div>
    </div>
    
      
      
    </>
  );
}
