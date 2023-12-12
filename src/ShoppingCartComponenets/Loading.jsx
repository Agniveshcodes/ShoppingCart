import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
// loading component 
function Loading() {
    return ( 
        <>
            <div
            className=' min-h-screen w-full bg-indigo-200 flex justify-center items-center flex-col '
            >
                <AiOutlineLoading3Quarters 
                className=' text-4xl text-orange-600 font-bold animate-spin mb-4 '
                />
                <h1
                className='text-4xl text-orange-600 font-bold'
                > Loading...</h1>

            </div>
        </>
     );
}

export default Loading ;