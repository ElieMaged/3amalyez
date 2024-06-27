'use client'

import Link from 'next/link'



interface TutorButtonProps {
    href:string;
    label:string;
}






export const TutorButton = ({
    href,
    label,
}:TutorButtonProps) => {
    return(
        <>
        <button
        className='font-normal w-full'
        >
<Link 
href={href}>
{label}
</Link>
        </button>
        </>
    )
}