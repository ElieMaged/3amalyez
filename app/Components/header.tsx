import {Poppins} from "next/font/google"


const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

interface HeaderProps {
    label:string;
}


export const Header = ({
    label,
}: HeaderProps) => {
    return(
        <div className="w-full flex flex-col gap-y-4 items-center justify-center text-3xl font-semibold">
<h1 className='items-center justify-center'>
    Log in
</h1>
<div className='text-muted-foreground text-sm'>
 {label}
</div>
        </div>
    )

}