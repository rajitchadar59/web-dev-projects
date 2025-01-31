"use client"
import { Londrina_Sketch } from 'next/font/google';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
const Generate = () => {
// const [link, setlink] = useState("")
// const [textlink, settextlink] = useState("")

const searchparams=useSearchParams()
const [links, setlinks] = useState([{link:"" ,textlink:""}])
const [handle, sethandle] = useState( searchparams.get('handle'))
const [picture, setpicture] = useState("")

const handlechange =(index , link , textlink)=>{
setlinks((initiallinks)=>{
 return initiallinks.map((item , i)=>{
if(i==index){
  return {link ,textlink}
}
else{
  return item
}

})

})


}



  const submitlinks= async()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "links":links,
  "handle":handle,
  "picture":picture
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const r = await fetch("http://localhost:3000/api/add", requestOptions)
const result = await r.json()
if(result.success){
  toast.success(result.message)
  setlinks("")
  setpicture("")
  sethandle("")
}
else{
  toast.error(result.message)
}



  }

const addlink=()=>{
 setlinks(links.concat([{link:"" ,textlink:""}]))

}





  return (
    <div className='bg-[#2f55bf] min-h-screen grid grid-cols-2'>
      
       
     <div className="flex justify-center items-center flex-col">
        <h1 className='font-bold text-4xl text-slate-900'>Create your Linktree for your use</h1>
        <div className="flex flex-col gap-5 my-6 ">
          <h2  className='font-bold text-xl  text-slate-900 '>step 1:claim your handle</h2>
        <input value={handle ||""} onChange={(e)=>{sethandle(e.target.value)}} className='px-4 py-4 focus:outline-blue-700 rounded-xl w-80 h-6' type="text" placeholder='Choose a  handdle'/>
        <h2  className='font-bold text-xl  text-slate-900'>step 2 : Add links</h2>
          

         
         {links && links.map((item , index)=>{
         return   <div key={index} className="links flex  gap-2">
           <input  value={item.textlink} onChange={(e)=>{handlechange(index ,item.link,e.target.value )}} className='px-4 py-4 focus:outline-blue-700 rounded-xl w-40 h-6' type="text" placeholder='Enter link text' />
         <input value={item.link} onChange={(e)=>{handlechange(index ,e.target.value ,item.textlink)}} className='px-4 py-4 focus:outline-blue-700 rounded-xl w-40 h-6' type="text" placeholder='Enter link '/>
        
        
         </div>

         })}


            <button onClick={()=>{addlink()}} className='px-2 mx-2 bg-black text-white font-bold h-8 rounded-full w-24'>+Add Link</button>
            <h2  className='font-bold text-xl  text-slate-900'>step 3 : Add Pictures and finalize</h2>
            <div className="flex flex-col ">
            <input  value={picture ||""} onChange={(e)=>{setpicture(e.target.value)}} className='px-4 py-4 focus:outline-blue-700 rounded-xl w-72 h-6' type="text" placeholder='Enter link to  your picture'/>
            <button disabled={picture=="" ||handle=="" ||links[0].linktext==""} onClick={()=>{submitlinks()}} className='px-2 my-3 w-4/6 mx-2 bg-black text-white font-bold h-8 rounded-full disabled:bg-slate-500'>Create your Linktree</button>
            <ToastContainer />
            </div>
        </div>
     </div>
     <div className="w-full h-screen">
        <img className='h-screen' src="loginpage.png" alt="" />
     </div>
    </div>
  )
}

export default Generate
