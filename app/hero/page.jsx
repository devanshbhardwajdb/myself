'use client'
import Link from "next/link";
import { useRef } from "react";



const Hero = () => {


    const hero = useRef(null);


    return (
        <div ref={hero}>

            <div
                id='#home'
                className='w-full   flex items-center justify-center flex-col  min-h-[100vh] h-auto px-[20vw]  gap-10  pt-[15vh] bg-[#ffbbcc] page'>
                <div
                    className="w-1/2 max-md:w-[60vw] h-full flex items-center justify-center  rounded-full relative cursor-pointer " >
                    <img
                        alt="Photo" src={"/1.jpg"} width={300} height={300} className=" rounded-full object-center z-[2] aspect-square "

                    />



                    {/* <div className="spinner absolute w-[106%] h-[106%]    z-[-2]"></div> */}
                </div>

                <div className="w-full h-full relative ">
                    <h1 className=' h1 text-left flex flex-col  items-center gap-2 transition-all duration-500 '>
                        <div className=" pink_gradient hover:text-[#f898b0] nameh1 text-5xl  font-extrabold max-lg:text-center " >DEVANYA</div>

                    </h1>
                    <div className="flex gap-x-5 justify-center mt-4 mb-20 max-md:flex-col max-md:gap-5 max-xl:items-center max-xl:justify-center font-poppins relative">

                        <Link href="/memories" className="w-32 h-14  rounded-xl text-black shadow-md shadow-black ">
                            <button className=" font-poppins bg-[#f898b0] w-full h-full rounded-xl duration-300  text-sm">
                                Memories
                            </button>
                        </Link>
                        <Link href="/gallery" className="w-32 h-14  rounded-xl text-black shadow-md shadow-black ">
                            <button className=" font-poppins bg-[#f898b0] w-full h-full rounded-xl duration-300  text-sm">
                                Gallery
                            </button>
                        </Link>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default Hero
