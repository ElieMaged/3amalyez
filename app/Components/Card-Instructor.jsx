import Link from 'next/link'
import ins from '../Components/instructors'





export default function Card({name, occupation, country, courses, price, img, show, hide, id, vidId}) {
    
    return(
     <>
<div className='flex flex-row m-0 p-0'
id={id}

>
<Link
onMouseEnter={show}
onMouseLeave={hide}
numb = {vidId}
id={id}

href='' class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl d m-5  mt-5 mb-2 w-2/3 p-0 cardy-2">
    
    <img class="object-cover w-24 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">{name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{occupation}.</p>
        <h6>Teaches {courses}</h6>       
        <p>{price}$ per lesson</p>
        <p>lives in {country}</p>
    </div>
    
</Link>


<iframe width="560" height="315" src="https://www.youtube.com/embed/gzppxq0XZ-s?si=IXcSszgipQ0j0iaB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-1/4 mt-10 h-2/4" id={vidId} style={{
   display:`none`
}}  allowfullscreen></iframe>

</div>
  
     </>
    )
}