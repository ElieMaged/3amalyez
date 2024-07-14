'use client'
import  Link  from 'next/link'
import { useTranslations } from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image'
import thumbs from '@/media/thumbs.svg'
import dollar from '@/media/dollar.svg'
import diamond from '@/media/diamond.svg'







export default function Home({Component, pageProps, params:{locale}}:any) {

  // translation for nav
const t = useTranslations('Index')
const lang = t('lang')

const l = useTranslations('Logos')


  return (
// page text

  <div className="flex flex-row text-center justify-center">
      <div className='justify-items-center '>
          <br /><span className='text-4xl'>{t('videoText1')}</span>
          <br /><span className='text-4xl'>{t('videoText2')}<span>{t('site')}</span></span>
          <br /><span className='text-4xl'>{t('videoText3')}</span>
          <br />
          <br />
          <br /><span className='text-4xl'>{t('videoText4')}</span>
       <iframe className='m-auto mt-5' width="1200" height="600" src="https://www.youtube.com/embed/1s_QGiK-8JM?si=5zX3j1i3y7jfWxEZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <div className='mt-4 mb-5 max-w-100 m-auto'>
       
       <span className='text-3xl'> {t('desc')} </span>
        <br></br>
        <span className='text-3xl mb-2'> {t('site')}</span>
          <br /><span className='text-3xl'>{t('desc2')}</span>
          <br /><span className='text-3xl'>{t('desc3')}</span>
          
{/* svgs and text */}
<div className="container flex flex-row space-x-40 m-auto justify-center mt-10 mb-5">
  <span className='text-xl'>
  <Image
  className='m-auto mb-2'
  src={diamond}
  width='40'
  height='40'
  alt='diamond'
  />
{l('diamond')}
  </span>

  <span className='text-xl'>
  <Image
  className='m-auto mb-2'
  src={thumbs}
  width='40'
  height='40'
  alt='thumbs'
  />
 {l('thumbs')}
  </span>

  <span className='text-xl'>
<Image
className='m-auto mb-2'
src={dollar}
width='40'
height='40'
alt='dollar'
/>
{l('dollar')}
  </span>


</div>


          <br /><span className='text-3xl'>{t('or')}</span> 
          <br /><span className='text-3xl'>{t('desc5')}{t('desc4')}</span>
          <br /><span className='text-3xl'></span>
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
