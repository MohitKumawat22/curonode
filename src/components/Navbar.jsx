import React from 'react'
import Link from 'next/link' 


const Navbar = () => {
  return (
    <>

      <nav className=' p-2 pb-3 pt-2 pb-0 w-1/2 flex justify-between  flex-row bg-white absolute top-0 z-45 items-center'>
     
        <Link href='/' target="_self" >
        <h3 className="text-2xl ml-2  font-poppins  text-[#AB3A33] font-bold">HerSigns</h3>
       </Link>
       
     {/* <div className='p-2 bg-red-300 rounded-xl mr-2'> <h5 className='text-white  '>Sign IN </h5></div>
     */}

      </nav>
    </>
  )
}

export default Navbar
