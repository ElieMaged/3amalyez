'use client'
import  Link  from 'next/link'
import { useTranslations } from 'next-intl'
import {unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image'
import Signup from '@/app/Components/signup-form'








export default function Home({Component, pageProps, params:{locale}}:any) {

 

  // translation for nav
const t = useTranslations('Index')
const lang = t('lang')

const l = useTranslations('Logos')


  return (
// page text yay
<>
<body className='entirePage'>
  <div className="max-w-64 md:max-w-full m-auto md:flex md:flex-row text-center justify-center">
      <div className=''>

          <br /><span className='text-2xl md:text-3xl text-white'>{t('videoText1')}</span>
          <br /><span className='text-2xl md:text-3xl text-white'>
          <span className='text-2xl md:text-3xl text-white'>مع</span>
          <br />
           <span className='text-3xl siteTitle text-white'>{t('site')}
           </span>
           <br />
           </span>
          <br /><span className='text-2xl md:text-3xl text-white'>جبنالك المدرب لغاية عندك في كورس تفاعلي أونلاين 
          </span>
          <br />
          <br />
          <span className='text-2xl md:text-3xl text-white'>تقدر تتواصل فيه مع المدرب مباشرة 
          </span>
          <br />
          <br />
          <br /><span className='text-2xl md:text-4xl pinkText'>{t('videoText4')}</span>
          

    {/* VIDEO */}
  <section className='mt-10 flex items-center justify-center'>
       <iframe className='' width="800" height="400" src="https://www.youtube.com/embed/1s_QGiK-8JM?si=5zX3j1i3y7jfWxEZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       </section>
        <br />
        <span className='text-2xl md:text-3xl mb-2 siteTitle'> {t('site')}</span>
          <br /><span className='text-2xl md:text-3xl'>{t('desc2')}</span>
          <br /><span className='text-2xl md:text-3xl'>{t('desc3')}</span>
          
  {/* svgs and text */}
<div className="container md:flex md:flex-row md:space-x-40 m-auto justify-center mt-10 mb-5">
  <span className='text-xl'>
  <svg className='fill-yellow-900 m-auto mb-1.5' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path d="M31.835 9.233 27.464.875C27.209.388 26.549-.011 26-.011H15.94l-.033-.004c-.009 0-.018.003-.027.004H6c-.55 0-1.211.398-1.47.883L.171 9.069c-.259.486-.207 1.248.113 1.696l15.001 20.911c.161.224.375.338.588.338.212 0 .424-.11.587-.331l15.247-20.758c.325-.444.383-1.204.128-1.691zm-2.386-.245h-5.358l2.146-6.144zM17.979 1.99h6.436l-1.997 5.716zm2.903 6.998h-9.301l4.396-6.316zM9.809 8.034 7.803 1.99h6.213zm11.464 2.954L15.897 26.38l-5.108-15.392h10.484zm-7.619 14.983L2.906 10.988h5.776zm9.738-14.983h5.787l-11.03 15.018zM5.89 2.575l2.128 6.413H2.479z"/></svg>

{l('diamond')}
  </span>

  <span className='text-xl'>
<svg className='m-auto mb-1.5 fill-blue-900' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path d="M512 331.117a48.171 48.171 0 0 0-10.172-29.641c-2.469-3.156-5.422-5.891-8.578-8.375 5-7.625 7.969-16.703 7.969-26.484 0-26.859-21.75-48.641-48.625-48.641h-67.391c-6.688-.297-13.406-1.047-18.766-2.469-5.484-1.391-9.234-3.547-10.813-5.313-2.766-3.141-3.328-5.141-3.438-8.438-.031-2.797.844-6.594 2.688-10.922 2.719-6.5 7.453-13.953 12.219-21.156 2.391-3.609 4.781-7.188 6.938-10.781s4.125-7.125 5.594-11.094c4.547-12.641 14.391-35.781 14.406-63.984.016-11.859-1.75-24.672-6.375-37.813-3.953-11.281-10.063-20.344-17.766-26.609-7.672-6.281-17-9.625-26.266-9.594-11.031-.016-21.719 4.641-29.875 12.719-8.188 8.063-13.922 19.469-16.188 33.109-.719 4.453-2.969 12.453-6.594 21.891-5.422 14.203-13.891 32.016-24.688 49.422-10.781 17.422-23.969 34.422-38.469 47.219-18.359 16.234-35.828 29.953-50.734 42.016-14.922 12.141-27.234 22.344-35.766 32.828-1.813 2.281-5.047 4.797-9.078 6.953-6.016 3.266-13.641 5.688-19.578 7.094a118.103 118.103 0 0 1-7.313 1.531c-.469.078-.719.109-1.063.172v-5.203H36.469C16.313 259.554 0 275.882 0 296.023v162.938c0 20.141 16.313 36.469 36.469 36.469h43.5c13.438 0 24.313-10.875 24.313-24.313v-1.203h38.906c5.375-.047 16.094 1.625 28.75 4.391 19.156 4.109 43.328 10.453 66.859 15.969 23.609 5.484 46.344 10.219 64.266 10.906 19.047.719 33.078 1.016 44.203 1.016 23.703.031 34.531-1.469 50.734-3.266l.406-.063 22.75-3.266.219-.047c23.078-3.75 40.75-23.656 40.75-47.875 0-3.141-.406-6.156-1-9.094 6.219-2.688 11.875-6.5 16.406-11.391a48.162 48.162 0 0 0 12.938-32.907c.016-7.313-1.656-14.219-4.563-20.391C501.344 365.804 512 349.82 512 331.117zM51.281 456.586c-9.25 0-16.75-7.5-16.75-16.75s7.5-16.75 16.75-16.75 16.75 7.5 16.75 16.75-7.5 16.75-16.75 16.75zm413.438-101.954a12.46 12.46 0 0 0-11.094 8.422 12.494 12.494 0 0 0 3.625 13.422c5.156 4.516 8.297 10.719 8.313 17.813-.016 6.234-2.359 11.719-6.266 15.922a23.805 23.805 0 0 1-15.422 7.531 12.513 12.513 0 0 0-9.938 6.578 12.476 12.476 0 0 0 .125 11.906c2.031 3.641 3.156 7.438 3.156 11.453 0 11.766-8.563 21.391-19.844 23.281l-22.313 3.219c-16.594 1.828-25.125 3.078-47.797 3.109-10.672 0-24.422-.297-43.297-1-9.5-.344-22.609-2.375-37.031-5.313-21.656-4.422-46.375-10.813-68.547-16.156-11.109-2.672-21.578-5.078-30.859-6.859-9.344-1.766-17.313-2.938-24.344-2.969h-26.438V287.695a132.79 132.79 0 0 0 9.609-2.563c5.578-1.719 11.703-4.016 17.688-7.234 5.953-3.219 11.875-7.344 16.656-13.234 5.859-7.328 17.391-17.281 32.063-29.109 14.688-11.891 32.547-25.922 51.547-42.719 22.688-20.078 40.75-46.766 53.969-71.578 6.594-12.406 11.969-24.344 15.969-34.844 4.016-10.563 6.688-19.469 7.906-26.703 1.531-9.219 5.125-15.531 9.094-19.453 4-3.906 8.297-5.516 12.375-5.531 3.453.016 6.938 1.109 10.531 4 3.594 2.906 7.25 7.797 9.969 15.516 3.609 10.297 4.984 20.156 5 29.578 0 22.469-7.969 42.031-12.906 55.438-.656 1.891-2.688 5.578-5.406 9.813-4.109 6.453-9.703 14.313-14.469 23.016-4.719 8.734-9 18.438-9.094 29.672-.094 8.656 3.219 18.156 10.172 25.453 6.484 6.844 14.641 10.25 22.688 12.406 8.125 2.125 16.484 2.922 24.328 3.266l.531.016h67.625c13.078.016 23.688 10.625 23.703 23.719 0 8.109-4.078 15.203-10.328 19.531-4 2.75-6.031 7.547-5.25 12.328a12.486 12.486 0 0 0 8.953 9.953 24.077 24.077 0 0 1 12.5 8.359c3.078 3.984 4.891 8.859 4.891 14.328.032 12.56-9.843 22.763-22.343 23.513z"/></svg>
 {l('thumbs')}
  </span>

  <span className='text-xl'>
<svg className='m-auto mb-1.5 fill-green-900' xmlns="http://www.w3.org/2000/svg" id="_x32_" width="40" height="40" version="1.1" viewBox="0 0 512 512"><path d="M387.813 349.816c7.25 5.344 16.75 15.141 16.75 15.141a3.635 3.635 0 0 0 3.297.859 3.643 3.643 0 0 0 2.578-2.234s51.844-131.953 78.719-200.406c-97.188-106.766-279.078 2.109-387.203-76.813C94.5 80.91 84.625 70.754 84.625 70.754a3.672 3.672 0 0 0-3.313-.844 3.64 3.64 0 0 0-2.594 2.234S26.89 204.113-.001 272.55c97.376 106.97 279.751-2.484 387.814 77.266zm-69.829-212.609c39.094-1.234 76.953.625 110.234 14.219-5.234 18.516 2.828 37.734 17.188 52.125a197020.594 197020.594 0 0 1-34.297 87.328c-16.672-8.531-35.891.688-44.578 17.578-33.266-13.578-71.125-15.453-110.219-14.219 32.563-16.297 61.25-44.313 74.531-78.125 13.266-33.75 7.626-64.422-12.859-78.906zm-71.609 41.906c1.906-.531 3.891-.922 5.859-1.297 1.313-3.375 2.641-6.734 3.953-10.109 5.531-.313 11.047-.656 16.563-.984-1.281 3.313-2.594 6.625-3.891 9.938 3.734.078 7.203.406 10.313 1 5.281 1.016 9.766 4.781 9.766 4.781.625.313.906.906.75 1.625s-.719 1.453-1.531 2.016c-3.438 2.328-6.906 4.688-10.375 7.047-1.094.766-2.438.969-3.313.594 0 0-3.516-2.563-7.156-3.188-3.609-.656-7.656-.797-12.047-.563-5.734.344-10.359 1.5-13.844 3.531-3.469 2.016-5.813 4.531-6.984 7.531-1.063 2.719-.906 4.719.5 6.047 1.391 1.313 4.313 2.078 8.797 2.203l12.656.188c9.391.141 15.797 1.969 19.297 5.344 3.531 3.375 3.906 8.578 1.172 15.531-1.625 4.141-4.016 7.781-7.172 10.969-3.172 3.219-6.891 5.938-11.109 8.203-4.266 2.313-8.953 4.078-14.125 5.391-2.25.578-4.547 1-6.859 1.375-1.547 3.922-3.094 7.828-4.625 11.734-5.516.328-11.031.672-16.563.984 1.5-3.828 3-7.656 4.516-11.484-4.594-.063-8.828-.453-12.672-1.203-5.875-1.156-11.938-6.875-11.938-6.875-.578-.328-.813-.953-.641-1.656.188-.672.766-1.422 1.531-1.938 3.672-2.438 7.344-4.906 11.016-7.391 1.156-.75 2.594-.969 3.453-.469 0 0 4.422 4.25 8.672 5.063 4.281.797 8.75 1.063 13.406.813 5.875-.359 11.094-1.516 15.609-3.5 4.547-1.969 7.547-4.828 9.016-8.547 1.031-2.688.938-4.766-.344-6.219-1.281-1.469-4.125-2.234-8.469-2.422-4.813-.047-9.625-.125-14.438-.188-8.531-.172-14.5-1.906-17.891-5.078-3.422-3.188-3.734-8.281-1.016-15.219 1.5-3.828 3.766-7.297 6.75-10.375 3-3.047 6.5-5.734 10.469-7.938a57.742 57.742 0 0 1 12.939-5.265zM43.75 232.16c11.438-29.109 22.875-58.203 34.313-87.313 16.656 8.531 35.875-.719 44.531-17.578 33.281 13.594 71.172 15.469 110.281 14.219-32.578 16.313-61.266 44.313-74.547 78.125-13.266 33.781-7.641 64.469 12.828 78.906-39.094 1.25-76.969-.609-110.25-14.219 5.25-18.515-2.781-37.765-17.156-52.14z"/><path d="M126.938 226.988c6.219 1.031 13.188-3.047 15.438-8.797 2.25-5.719-1.063-10.938-7.281-11.969-6.203-1.031-12.953 2.516-15.203 8.234-2.251 5.735.842 11.517 7.046 12.532zM354.063 229.52c6.219 1.031 12.969-2.516 15.219-8.234 2.25-5.734-.844-11.516-7.063-12.531s-13.188 3.063-15.438 8.781c-2.25 5.734 1.063 10.984 7.282 11.984zM500.047 193.348 415.938 408.88c-2.969-4.063-6.375-8.516-10.156-13.047l-.172-.203-.203-.203c-9.594-10.234-24.344-22.125-45.844-31.36-21.469-9.25-49.656-15.844-85.938-15.844-1.156 0-2.375.016-3.625.031-20.016 0-40.906 1.25-60.969 2.453-20.594 1.234-41.719 2.484-62.094 2.469-24.109.016-51-1.609-77.078-9.141-17.547-5.078-34.641-12.828-50.547-24.5l-8.406 18C28 349.473 46.25 357.504 64.469 362.754c28.766 8.281 57.5 9.891 82.469 9.891 21.156 0 42.656-1.281 63.25-2.516 20.063-1.188 40.594-2.422 59.813-2.406h-.125l.297-.016c1.109 0 2.266-.016 3.453-.016 33.953.016 59.344 6.125 78.25 14.25 18.781 8.094 31.188 18.188 39.172 26.626 5.328 6.422 10.109 12.969 13.516 17.906 1.75 2.5 3.125 4.578 4.063 6.016.484.719.844 1.297 1.094 1.672l.25.422.078.109 2.516 4.031a7.38 7.38 0 0 0 6.922 3.438 7.389 7.389 0 0 0 6.172-4.656L512 216.254l-11.953-22.906z"/></svg>
{l('dollar')}
  </span>


</div>

  {/* Second description */}

          <br /><span className='text-2xl md:text-3xl'>{t('or')}</span> 
          <br /><span className='text-2xl md:text-3xl'>{t('desc4')}</span>
          <br /><span className='text-2xl md:text-3xl' >{t('desc5')}</span>
          <br /><span className='text-2xl md:text-3xl'></span>
          
          <h1 className='text-2xl mb-3'>Coming Soon</h1>
   
  {/* nav buttons */}


  {/* Signup Nav */}
<Signup />
      </div>
    </div>
    </body>
    </>
  );
}
