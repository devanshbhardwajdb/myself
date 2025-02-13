'use client'
import Link from "next/link";
import { memories } from "@utils/memories";


const Memories = () => {

    return (

        <div
            className='w-full   flex items-center justify-center flex-col  min-h-[100vh] h-auto px-[5vw]  gap-5  pt-[5vh] max-lg:pt-[10vh] bg-[#ffbbcc] page '>
            <Link href="/poetry" className="w-32 h-14  rounded-xl text-black shadow-md shadow-black ">
                <button className=" font-poppins bg-[#f898b0] w-full h-full rounded-xl duration-300  text-sm">
                    See my Love ❤️
                </button>
            </Link>
            <div className="flex flex-wrap  gap-5 max-lg:flex-col">
                {memories.map((memory) => (

                    <div
                        key={memory.id}
                        className='  rounded-3xl glassmorphism w-[20vw] h-[60vh]  p-12 max-md:p-4 flex flex-col  items-center justify-center max-lg:w-[90vw]' >


                        <div className='relative flex justify-center w-full'>
                            <img alt="memories" src={memory.photo} className='rounded-3xl h-[30vh]  justify-center ' />

                        </div>
                        <h3 className='text-lg font-semibold pt-5   text-black text-center'>{memory.heading}</h3>
                        <p className='text-md pt-5  text-justify text-gray-800'>{memory.content}</p>

                    </div>))}
            </div>


        </div>

    )
}

export default Memories
