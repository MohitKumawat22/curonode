import React from 'react'
import Image from 'next/image'
import PeriodTracker from '@/components/PeriodTracker'

const page = () => {
  return (
     <>
    <div className='h-screen w-screen  flex  flex-col '>
    <div className='h-1/2 w-full  flex justify-center flex-col items-center m-2 p-3'>

      <h2 className='text-5xl font-bold capitalize text-[#AB3A33] magnet-target'>Understanding symptoms Empowering decisions</h2>
      <br />
      <div className='h-24 w-1/2 '>
      <h3 className='text-lg font-semibold mt-4 text-center capitalized'>Studies show that a large number of women in India experience menstrual and pelvic health symptoms, yet many ignore them due to lack of awareness and social normalization. Conditions like PCOS and endometriosis often go undiagnosed for years because early warning signs are misunderstood or dismissed.</h3>
</div>
      </div>
      <div className='flex flex-row absolute mt-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='h-14 m-3 w-64 flex justify-evenly items-center align-center p-2 rounded-lg uppercase text-white   bg-gradient-to-br from-pink-400 to-red-600'>
              <Image 
          src="/ptim32.png"
          height={60}
          width={60}
          className='  '
          alt="" />
        <h6 className='font-bold'>Period Tracker</h6>
      </div>
         <div className='h-14 m-3 w-64 flex justify-evenly items-center align-center p-2 rounded-lg uppercase text-white bg-gradient-to-br from-pink-400 to-red-600'>
              <Image 
          src="/ggg.png"
          height={60}
          width={60}
          className='  '
          alt="" />
        <h6 className='font-bold'>Quick Symptom test</h6>
      </div>
      </div>
    <Image 
src="/ptim32.png"
height={200}
width={600}
className='h-64  w-auto object-fit absolute bottom-0 mask-target left-0'
alt="" />
    </div>
    <PeriodTracker/>
   </>
  )
}

export default page
