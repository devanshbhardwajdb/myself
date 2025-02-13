import React from 'react'

const Poetry = () => {
    return (
        <div
            className='w-full   flex items-center justify-center flex-row flex-wrap  min-h-[100vh] h-auto px-[5vw] max-lg:px-1  gap-5  pt-[5vh] bg-[#fdcfdb] page'>

            <div
                className='  rounded-3xl w-[60vw] max-lg:w-[98vw] h-[90vh]   p-12 max-md:p-1 flex flex-col items-center justify-center mb-16' >
                <h3 className='text-lg font-semibold pt-5  text-justify text-black'>Kitna Pyar Krta Hu Main?</h3>

                <div className='relative flex justify-center w-full'>
                    <img alt="memories" src='/poetry.jpg' className='rounded-3xl h-[80vh]  justify-center' />

                </div>



            </div>


        </div>
    )
}

export default Poetry
