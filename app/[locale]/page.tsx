'use client'
import  Link  from 'next/link'
import { useTranslations } from 'next-intl'



export default function Home() {
const t = useTranslations('index')

const handleSubmit = () => {
  console.log('Translation function:', t);
  console.log('Attempted translation:', t('title'));
console.log(t('title'))
}

  return (
 <>
<h1></h1>
 <button onClick={handleSubmit}>HIII</button>
    <div className="flex flex-col text-center">
      <div className='justify-items-center'>
       <iframe className='m-auto mt-5' width="560" height="315" src="https://www.youtube.com/embed/1s_QGiK-8JM?si=5zX3j1i3y7jfWxEZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <p className='mt-4 pl-20 pr-20 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur dignissimos quo doloribus aut iusto fuga, vel laboriosam vero minus, animi commodi error voluptate obcaecati? Maiores dolorem nulla temporibus architecto.
       Facilis veniam harum delectus quos ipsa itaque maxime est sequi autem officiis quam commodi velit molestias excepturi, a nisi voluptates incidunt nam esse non exercitationem inventore!</p>
   

       <Link 
    href='/student-signup'
    className='text-white font-bold py-2 px-4 border rounded mb-5 cardy'>Sign up as a Student</Link>
    <br />
     <h2 className='mb-3 mt-3'>or</h2>
   
    <Link 
    href='/mentor-signup'
    className='text-white font-bold py-2 px-4 border rounded mb-5 cardy'>Sign up as a Mentor</Link>
    <br></br>
    <br></br>
      </div>
    </div>
  
  </>
  );
}
