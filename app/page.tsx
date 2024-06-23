'use client'
import Image from "next/image";
import {useRef, useEffect, useState} from 'react'
import { promises as fs } from 'fs';
import ins from './Components/instructors'
import Card from './Components/Card'


export default function Home() {
  const mappy = ins.map((prev) => prev)

const [list, setList] = useState(mappy);
const [query, setQuery] = useState('')

const filterCourses = list.filter((prev) => {
  return prev.courseTag.toLowerCase().includes(query.toLowerCase())
})




const valRef:any = useRef()








  return (
  <main className=" ">
    <br/>
{/* Search for :<input value={query} onChange={e => setQuery(e.target.value)} className='text-black' text='search'></input> */}
<br></br>
<br></br>
<br></br>
<div className='flex flex-col'>
 <h1 className='ml-2 text-2xl'>Find your Instructor:</h1>
<select value={query} onChange={e => setQuery(e.target.value)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 w-1/3 ' name="cars" id="cars">
<option selected className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="">All Subjects</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="BUS">Business</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="MED">Medicine</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="WOOF">Woof Woof?</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="RIZZ">Rizzardry</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="SATAN">Satanism</option>
</select>


{filterCourses.map(({name, occupation, country, courses, price, img, id}) => {
  return <Card
  key={id}
  name={name}
 img={img}
 occupation={occupation}
 price={price}
 country = {country}
 courses = {courses}
 
  />
}
)}
</div>







  </main>
  );
}
