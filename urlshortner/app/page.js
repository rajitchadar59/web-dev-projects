import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<main>
  <div className="bg-slate-950 w-full h-0.5"></div>
  <div className="bg-slate-700 h-10 flex justify-center items-center gap-20 text-white  text-lg">
  <Link href="/generate"><button className='bg-slate-900  shadow-lg gap-16 font-bold   rounded-full w-28 border border-slate-500 '>Try Now</button></Link>
 <div className="font-bold"> WORLDS BEST URL SHORTNER</div>
  <Link href="/github"><button className='bg-slate-900  shadow-lg gap-16 font-bold  rounded-full w-28 border border-slate-500 '>Github</button></Link>

  </div>
  <div className="bg-slate-950 w-full h-0.5"></div>
<div className="w-full  h-14 ">
 
  <img src="v.jpg" alt="office image" />
</div>
</main>
    
  );
}
 