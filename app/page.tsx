'use client'
import Image from "next/image";
import {useRef, useEffect, useState} from 'react'

export default function Home() {
const [list, setList] = useState(['']);
const [query, setQuery] = useState('')



const filterItems = list.filter(prev => {

  prev.toLowerCase().includes(query.toLowerCase())})

const valRef:any = useRef()
// button Function
const handleClick = (e:any) => {
  e.preventDefault();
  let itemVal= valRef.current.value;
  if(itemVal === '') return;
  setList((prev) => {
    return [...prev, itemVal]
  })
  valRef.current.value='';

}

  
  return (
  <main className=" ">

 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose an option</label>
  <select value ={query} id='mySelect' onChange={(e)=> setQuery(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value='' >Choose a country</option>
    <option value="Egypt">Egypt</option>
    <option value="UAE">UAE</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
   </select>

<form className="max-w-sm mx-auto">

</form>

 <datalist>
  <option>
    Hello
  </option>
 </datalist>

<br />
<br />
    <form>
 Add List:<input ref={valRef} className='text-black' type='text'/> <button onClick={handleClick}>Add</button>
 <br />
 <br />

 List:
 <ul>
{filterItems.map((prev:any) => 
<li key={prev.id}>{prev}</li>
)}
</ul>
 </form>

  </main>
  );
}
