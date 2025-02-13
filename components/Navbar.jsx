
"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { navVariants, navVariants2 } from "../utils/motion";


const Navbar = () => {
  const ref = useRef();
  const ref2 = useRef();
  const hero = useRef(null);
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }



  return (
    <>
      <nav
        className="nav fixed  top-0 z-10 backdrop-blur-lg  flex justify-between max-lg:justify-center items-center max-lg:gap-8 p-4 transition-all duration-300 px-[30vw] max-lg:px-5 nav_head h-[8vh] bg-black/80 text-white  font-poppins w-[100vw] "

      >
        <div className="flex items-center nav-left cursor-pointer ">
          <Link href="/" className='items cursor-pointer'>
            <img alt="logo" src={"/devanya-logo-white.png"} className="cursor-pointer w-14" />
          </Link>
        </div>

        <div className=" flex  items-center gap-20 max-lg:gap-8 font-normal   relative nav-right transition-all duration-500 text-base">

          <Link href="/memories" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#f898b0] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Memories</h1>
          </Link>
          <Link href="/gallery" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#f898b0] hover:shadow-glow  hover:scale-[0.9] duration-500 items cursor-pointer">Gallery</h1>
          </Link>



        </div>
        {/* <div className={` flex fixed max-sm:w-[50vw] top-[7.8vh] w-[30vw] p-5  right-0 flex-col bg-black/80 text-base  items-start gap-10 font-light   nav-right  duration-500 transform transition-transform  lg:hidden ${menu ? "translate-x-0" : "translate-x-full"}`}>

          <Link href="/memories" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#f898b0] hover:shadow-glow hover:scale-[0.9] duration-500 items cursor-pointer">Memories</h1>
          </Link>
          <Link href="/gallery" onClick={() => { setMenu(false) }}>
            <h1 className="hover:text-[#f898b0] hover:shadow-glow  hover:scale-[0.9] duration-500 items cursor-pointer">Gallery</h1>
          </Link>


        </div>
        <div className='absolute top-[30%]  right-11 xl:hidden transition-all duration-500 ' onClick={() => { setMenu(!menu) }}>
          {/* <img src={"/assets/icons/menu-bar.svg"} width={30} height={30} className='cursor-pointer invert burger max-xl:rotate-0 transition-all duration-500 '></img> */}
          {/* <div className="burger flex flex-col items-end gap-1">
            <div className={`line1 border-2 rounded-full ${menu ? "w-4" : "w-8"} duration-200 `}></div>
            <div className={`line1 border-2 rounded-full ${menu ? "w-4" : "w-8"} duration-200 `}></div>
            <div className={`line1 border-2 rounded-full ${menu ? "w-8" : "w-4"} duration-200`}></div>
          </div>


        </div> */} 
      </nav>


    </>
  );

}
export default Navbar;
