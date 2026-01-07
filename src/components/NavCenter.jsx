import React from 'react'
import Link from 'next/link' 


const NavCenter = () => {
  return (
    <>

      <nav className='  w-1/2 flex justify-evenly  flex-row bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 z-45 items-center'>
     
      <Link href='/' target="_self" >
        <h3 className="text-sm m-2 p-2 rounded-full uppercase hover:bg-red-400 font-poppins text-red-800 hover:text-white font-bold">Home </h3>
       </Link>
        <Link href='/consultancy' target="_self" >
        <h3 className="text-sm m-2 p-2 rounded-full uppercase hover:bg-red-400 font-poppins  text-red-800 hover:text-white font-bold">Consultation </h3>
       </Link>
       
        <Link href='/awareness' target="_self" >
        <h3 className="text-sm m-2 p-2 rounded-full uppercase hover:bg-red-400 font-poppins  text-red-800 hover:text-white font-bold">Awareness </h3>
       </Link>
        <Link href='/period-kit' target="_self" >
        <h3 className="text-sm m-2 p-2 rounded-full uppercase hover:bg-red-400 font-poppins  text-red-800 hover:text-white font-bold">Period Kit</h3>
       </Link>
     {/* <div className='p-2 bg-red-300 rounded-xl mr-2'> <h5 className='text-white  '>Sign IN </h5></div>
     */}

      </nav>
    </>
  )
}

export default NavCenter
