import React from 'react'
import Card from '../../Components/Card'
import Data from '../../Components/InstructorData'


export default function instructors() {
return(
    <>
    <div className='flex flex-col'>
    <Card
   name={Data[0].name}
   img={Data[0].img}
   desc={Data[0].desc}
     />
    <Card
    name={Data[1].name}
    img={Data[1].img}
    desc={Data[1].desc}
    />
        <Card
   name={Data[0].name}
   img={Data[0].img}
   desc={Data[0].desc}
     />
    <Card
    name={Data[1].name}
    img={Data[1].img}
    desc={Data[1].desc}
    />
    </div>
    
    </>
)
}