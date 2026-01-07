import React from 'react'
import Image from 'next/image'
import Loginbtn from "@/components/Loginbtn";
import SheryEffects from '@/components/SheryEffects';
import Link from 'next/link';
const page = () => {
  return (
    <>
    <div className='h-screen w-screen z-10  flex justify-center'>
      <div className='h-1/2 w-full  flex justify-center flex-col items-center m-2 p-3'>

      <h2 className='text-5xl font-bold capitalized text-[#AB3A33] magnet-target'>Understanding symptoms ,Empowering decisions</h2>
      <br />
      <h3 className='text-3xl font-semibold mt-4 capitalized'>Sabko hota hai ? Not always</h3>

      </div>
      
    <Image 
src="/girlimg2.png"
height={200}
width={600}
className='h-96  w-auto object-fit absolute bottom-0 mask-target right-0'
alt="" />
    <Image 
src="/g3.png"
height={200}
width={600}
className='h-96  w-auto object-fit absolute bottom-0 left-0'
alt="" />
 <Link href='/profile' target="_self" >
 <div className=" bg-gradient-to-br from-pink-400 to-red-600 p-4 pt-3 pb-3 rounded-full w-auto absolute left-[95vh] top-1/2">
 <h6 className='capitalize text-white font-semibold'>Check your health Now</h6></div>
  </Link>
    </div>
   
    <div className='z-5'>
    <Image 
src="/bgbgb.jpeg"
height={900}
width={900}
className='h-full w-full  w-auto object-fit absolute opacity-10 bottom-0 right-0'
alt="" />
    </div>
    </>
  )
}

export default page
