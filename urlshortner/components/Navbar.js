import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white gap-4'>
      <div className="logo font-bold text-lg"><Link href="/">Shortner</Link></div>
      <ul className=' gap-4  bg-purple-700 flex justify-center items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/generate"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <li className='flex gap-3'>
          <Link href="/generate"><button className='bg-purple-500 shadow-lg p-3 rounded-full border border-gray-950 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-full border border-gray-950 font-bold'>Github</button></Link>
        </li> 


      </ul>

    </nav>
  )
}

export default Navbar
