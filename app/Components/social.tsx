"use client"

import {FcGoogle} from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

export const Social = () => {
    return(
<div className="flex flex-row">
    

<button onClick={() => {}} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-20 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-full justify-center shadow hover:shadow-lg">
    <FcGoogle className="h-5 w-5" />
</button>



<button onClick={() => {}} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-lg px-20 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 w-full justify-center shadow hover:shadow-lg">
    
    <FaFacebook className="h-5 w-5" />
</button>



</div>
)
}
