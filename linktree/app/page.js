"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
const createtree = ()=>{
router.push(`/generate?handle=${text}`)

}
const [text, settext] = useState("")
  return (
<>
<main>
<section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2">
  <div className=" flex  flex-col justify-center ml-[10vw]">
    <p className="text-[#D2E823] font-bold text-6xl ">Everything you are.</p>
    <p className="text-[#D2E823] font-bold text-6xl "> In one, simple link in</p>
    <p className="text-[#D2E823] font-bold text-6xl "> bio.</p>

    <p className="text-[#D2E823]  text-[18px] my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

    <div className="input gap-4 my-8">
      <input value={text} onChange={(e)=>{settext(e.target.value)}} className=" bg-slate-100 w-60 ml-4 rounded-lg h-14" type="text  " placeholder="Enter your handle" />
      <button onClick={()=>{createtree()}} className=" bg-pink-300 w-48 ml-4 text-[16px]  rounded-full h-14">claim your Linktree</button>
    </div>
  </div>
  <div className=" mr-[10vw] flex items-center flex-col justify-center">
  <img className="mt-12" src="smart.png" alt="home image"  />
  </div>

</section> 
<section className="bg-red-500 min-h-[100vh] ">

</section>
</main>
</>
  );
}
