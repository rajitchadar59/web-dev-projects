import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("links")
    //if the handle is already claimed you can not the claimed bittree
    const item = await collection.findOne({handle:handle})
    if(!item){
    return notFound()
    }
    return <div className="flex min-h-screen bg-slate-700 justify-center ">
     <div className="profile flex  items-center flex-col py-10">
        <img src={item.picture} className="rounded-full w-24 " alt="profile picture" />
        <span className="font-bold flex justify-center items-start text-xl">@{item.handle}</span>
         <span className="discription font-bold">made to  enjoy your life very easily with the use of this website</span>
        <div className="links">
          {item.links.map((item , index)=>{
            return <div className="py-4 px-2 my-4 bg-purple-700 min-w-72 rounded-full border shadow-lg border-black" key={index}>
             
             <Link href={item.link} className=" flex items-center justify-center"> {item.textlink}</Link>  
            </div>
          })}
        </div>
     </div>

    </div>
  }
