'use client'

import {useRouter} from "next/navigation"


interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();


const onClick = () => {
    router.push("/auth/login")
}

if(mode === "modal") {
    console.log("YIPEEE :3")
    return(
       <span>HIIIII</span>
    )
}


return(
    <span onClick={onClick} className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        {children}
    </span>
)
}