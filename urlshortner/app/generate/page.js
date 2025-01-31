"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
  const generate=()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) =>{

        seturl("")
        setshorturl("")
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        alert(result.message)
        console.log(result)})
      .catch((error) => console.error(error));

  }
  return (
   <>
   <div className='mx-auto max-w-lg bg-purple-200  h-64 my-10 rounded-lg items-center '>

    
    <div className='flex flex-col w-4/5 my-3 '>
    <h1 className='text-lg font-bold mx-6 '>Generate your Short URL</h1>
        <input type="text" 
        value={url}
        className='my-3  mx-6  rounded-lg h-8 border border-slate-950 '
        placeholder='Enter your URL' 
        onChange={(e)=>{seturl(e.target.value)}} />
        <input type="text"
        value={shorturl}
        className='my-3  mx-6 rounded-lg h-8 border border-slate-950' 
        placeholder='Enter Prefered Short URL'
        onChange={(e)=>{setshorturl(e.target.value)}}  />
        <button onClick={generate} className='bg-violet-700 h-8 rounded-lg text-center w-11/12 mx-6 my-3 '>Generate</button>
        {generated && <>
         <span className='font-bold text-lg ml-6'>Your Link</span> <code className='ml-6'><Link  target = "_blank" href={generated}>{generated}</Link>
      </code>  </>}
     
    </div>
    
   </div>
   
   </>
  )
}

export default page
