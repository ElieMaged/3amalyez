'use client'
import  Link  from 'next/link'
import { useTranslations } from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server';






export default function Home({Component, pageProps, params:{locale}}:any) {

  // translation for nav
const t = useTranslations('Index')
const lang = t('lang')

  return (
// page text

  <div className="flex flex-row text-center justify-center">
      <div className='justify-items-center '>
       <iframe className='m-auto mt-5' width="560" height="315" src="https://www.youtube.com/embed/1s_QGiK-8JM?si=5zX3j1i3y7jfWxEZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <div className='mt-4 mb-5 max-w-100 m-auto'>
       
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
   
{/* nav buttons */}


  {/* student nav */}
       <Link 
    href={`${lang}/student-signup`}
    className='text-white py-2 px-4 border rounded mb-5 cardy text-xl'>{t('student')}</Link>
    <br />
     <h2 className='mb-3 mt-3'>{t('or')}</h2>


   {/* mentor nav */}
    <Link 
    href={`${lang}/mentor-signup`}
    className='text-white py-2 px-4 border rounded mb-5 cardy text-xl'>{t('mentor')}</Link>
    <br></br>
    <br></br>
      </div>
    </div>
  
    
  );
}
