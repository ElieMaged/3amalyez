export default function Card({name, img, desc}) {
    return(
     <>

<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5 ml-7 mt-5 mb-2">
    <img class="object-cover w-24 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}.</p>
    </div>
</a>

  
     </>
    )
}