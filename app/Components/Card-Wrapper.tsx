"use client"

import { Header } from '../Components/header'
import { Social } from '../Components/social'
import { BackButton } from '../Components/back-button'
import { TutorButton } from '../Components/tutor-login'

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel:string;
    backButtonHref:string;
    showSocial?:boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return(
       
<div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 container px-20 py-15">
    <a href="#" className=''>
        <div className='flex flex-col '>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center align-center">Auth 🔒</h5>
        </div>
    </a>
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{headerLabel}</div>
    <div>{children}</div>
    {showSocial && (
        
        <Social />    
        
    )}  
    <BackButton 
    label={backButtonLabel}
    href={backButtonHref}
    />
   
</div>

      
    )
}