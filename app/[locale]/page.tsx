'use client'
import  Link  from 'next/link'
import { useTranslations } from 'next-intl'



export default function Home() {
const t = useTranslations('Index')

const handleSubmit = () => {
  console.log('Translation function:', t);
  console.log('Attempted translation:', t('title'));
console.log(t('title'))
}

  return (
 <>
  <div className="flex flex-row text-center justify-center">
      <div className='justify-items-center '>
       <iframe className='m-auto mt-5' width="560" height="315" src="https://www.youtube.com/embed/1s_QGiK-8JM?si=5zX3j1i3y7jfWxEZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <div className='mt-4 mb-5 max-w-96 m-auto'>
       
       <span className='text-xl'> {t('desc')} </span>
        <br></br>
        <span className='text-2xl mb-2'> {t('site')}</span>
          <br  /><span className='text-xl'>{t('desc2')}</span>
          <br ></br><span className='text-xl'>{t('desc3')}</span>
          <br  /> <span className='text-xl'>{t('or')}</span> 
          <br  /> <span className='text-xl'>{t('desc4')}</span>
          <br  /> <span className='text-xl'>{t('desc5')}</span>
          </div>
       <h1 className='text-2xl mb-5'>Coming Soon</h1>
   

       <Link 
    href='/student-signup'
    className='text-white font-bold py-2 px-4 border rounded mb-5 cardy'>{t('student')}</Link>
    <br />
     <h2 className='mb-3 mt-3'>{t('or')}</h2>
   
    <Link 
    href='/mentor-signup'
    className='text-white font-bold py-2 px-4 border rounded mb-5 cardy'>{t('mentor')}</Link>
    <br></br>
    <br></br>
      </div>
    </div>
  
  </>
  );
}
