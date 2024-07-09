'use client'
import Image from "next/image";
import {useRef, useEffect, useState} from 'react'
import { promises as fs } from 'fs';
import ins from '../Components/instructors'
import Card from '../Components/Card-Instructor'
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
  let peep:number = Number(prev.price); 

   return prev.courseTag.toLowerCase().includes(subject.toLowerCase())&& prev.country.toLowerCase().includes(country.toLowerCase()) && peep >= minValue && peep <= maxValue
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
<select value={subject} onChange={e => setSubject(e.target.value)} className='mt-5 text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ml-2 w-1/4 h-1/3 cardy' name="subject" id="subjects">
<option selected className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="">All Subjects</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="BUS">Business</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="MED">Medicine</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="WOOF">Woof Woof?</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="RIZZ">Rizzardry</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="SATAN">Satanism</option>
</select>

{/* country filter */}

<select value={country} onChange={e => setCountry(e.target.value)} className='mt-5 text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:navy dark:focus:ring-blue-800 ml-2 w-1/4 h-1/3 cardy' name="country" id="countries">
<option selected className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white navy' value="">All Countries</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="Egypt">Egypt</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="UAE">UAE</option>
  <option className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' value="Saudi Arabia">Saudi Arabia</option>
</select>

{/* price filter */}

<span className='w-25 ml-5 '>
 <p>Price Per Session in $</p>
<MultiRangeSlider
style={{ border: 'none', boxShadow: 'none', padding: '15px 10px', width: '10em'
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
     
 
{/* Filtered courses */}

{filterCourses.map(({name, occupation, country, courses, price, img, id, vidId}) => {

  // show video function
const showVid = (e: any) => {
 

 let vid = document.getElementById(`${e.target.id + e.target.id}`);
  if(vid !== null){
    vid.style.display = ''
  }
  
}
// hide video function
const hideVid = (e:any) => {
  let vid = document.getElementById(`${e.target.id + e.target.id}`);
  if(vid !== null){
    vid.style.display = 'none'
  }
  
}
  return <Card
  key={id}
  name={name}
 img={img}
 occupation={occupation}
 price={price}
 country = {country}
 courses = {courses}
id = {id}
hide = {hideVid}
show = {showVid}
vidId = {vidId}

  />
}
)}
</div>







  </main>

  );
}
