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




const valRef:any = useRef()








  return (
  <main className=" ">




{list.map(({name, occupation, country, courses, price, img}) => {
  return <Card
  name={name}
 img={img}
 occupation={occupation}
 price={price}
 country = {country}
 courses = {courses}
 
  />
}
)}







  </main>
  );
}
