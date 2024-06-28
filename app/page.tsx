'use client'
import Image from "next/image";
import {useRef, useEffect, useState} from 'react'
import { promises as fs } from 'fs';
import ins from './Components/instructors'
import Card from './Components/Card'
import MultiRangeSlider from "multi-range-slider-react";






export default function Home() {
  // filter js
const [minValue, set_minValue] = useState(0);
const [maxValue, set_maxValue] = useState(200);
const handleInput = (e:any) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};


const mappy = ins.map((prev) => prev)

const [list, setList] = useState(mappy);


const [subject, setSubject] = useState('')
const [country, setCountry] = useState('')


const filterCourses = list.filter((prev) => {
  return prev.courseTag.toLowerCase().includes(subject.toLowerCase())&& prev.country.toLowerCase().includes(country.toLowerCase()) && prev.price >= minValue && prev.price <= maxValue
})




const valRef:any = useRef()








  return (
    
  <main className=" ">
  <br/>
<br></br>
<br></br>
<br></br>
<div className=''>

  {/* Filter Bar */}
 <h1 className='ml-2 text-2xl'>Find your Instructor:</h1>

{/* subject filter */}
<span className="flex-row flex ">
<select value={subject} onChange={e => setSubject(e.target.value)} className='mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 w-1/4 h-1/3 ' name="subject" id="subjects">
<option selected className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="">All Subjects</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="BUS">Business</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="MED">Medicine</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="WOOF">Woof Woof?</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="RIZZ">Rizzardry</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="SATAN">Satanism</option>
</select>

{/* country filter */}
<select value={country} onChange={e => setCountry(e.target.value)} className='mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 w-1/4 h-1/3 ' name="country" id="countries">
<option selected className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="">All Countries</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="Egypt">Egypt</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="UAE">UAE</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="Saudi Arabia">Saudi Arabia</option>
</select>

{/* price filter */}

<span className='w-5 ml-5 '>
 <p>Price</p>
<MultiRangeSlider
style={{ border: 'none', boxShadow: 'none', padding: '15px 10px', width: '30em'
}}
label='true'
ruler='false'
barLeftColor='white'
barInnerColor='green'
barRightColor='white'
thumbLeftColor='white'
thumbRightColor='white'
baseClassName="multi-range-slider"
			min={0}
			max={200}
			step={10}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
     
		/>
</span>

</span>



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
