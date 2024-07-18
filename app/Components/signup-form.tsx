'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { GoogleSpreadsheet } from 'google-spreadsheet';








export default function StudentSignup() {

    const [number, setNumber]:any = React.useState('')
    const [valid, isValid] = React.useState(true)

    type FormFields = {
        firstName:string
        lastName:string 
        email:string 
        number:number
        position:string
    }


// number validation
const handleChange = (v:any) => {
setNumber(v);
if(number.length < 7) {
    isValid(false)
}
 else {
    isValid(true)
 }
}



//onSubmit
const onSubmit: SubmitHandler<FormFields> = async (data:FieldValues) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...data, number}),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const dataStuff = await response.json();
     console.log({...data, number})
      setNumber('')
      reset();
      alert(`تم تسجيل ردك بنجاح في عملي كورسز 

اذا كنت معلم سيتم التواصل معك قريبا لطلب تفاصيل اخري 
اذا كنت طالب سيتم اشعاراك عند اطلاق الموقع 

شكرا`)
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  }





    
const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues
} = useForm<FormFields>();

 
    return(
        <>
      
  <div className='flex flex-row text-black justify-center'>
<form onSubmit={handleSubmit(onSubmit)} className="mx-auto" > 
<div className="grid md:grid-cols-2 md:gap-2 mt-5">
<div className="relative z-0 w-full mb-5 group">
        <input {
            ...register('lastName', {
                required:"Last Name is required",
            })
        } name='lastName'  type="text"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">اسم العائلة</label>
        {errors.lastName && (
            <p className='text-red-600'>{`${errors.lastName.message}`}</p>
        )}
    </div>
    <div className="relative z-0 w-full mb-5 group ">
        <input {
            ...register('firstName', {
                required: "First Name is required"
            })
        } name='firstName' type="text"  id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">الاسم الأول</label>
        {errors.firstName && (
            <p className='text-red-600'>{`${errors.firstName.message}`}</p>
        )}
    </div>
    
  </div>
  <div className="relative z-0 w-full mb-5 group ">
      <input {
        ...register('email', {
            required: "Email is required",
        })
      } name='email' type="email"  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">البريد الإلكتروني</label>
      {errors.email && (
            <p className='text-red-600'>{`${errors.email.message}`}</p>
        )}
  </div>

  <div className="relative z-0 w-full mb-5 group ">
      
       {/* Phone number */}
     
     <label className=''>الرقم (مع رقم البلد)</label>
<PhoneInput
country='eg'
value={number}
onChange={handleChange}
inputProps={{
    required: true
}}
/>

{!valid && <p className='text-red-600'>يرجى إدخال رقم هاتف</p>}

<span className='flex justify-center space-x-3 mt-5'>
<label>طالب</label>
<input {
    ...register('position')
} type="radio" name="position" value="student"/>

<label>معلم </label>
<input {
    ...register('position')
} type="radio" name="position" value="teacher"/>

<label>كلاهما</label>
<input {
    ...register('position')
} type="radio" name="position" value="both"/>

</span>
  </div>
  <button disabled={isSubmitting} type="submit" className="text-white py-2 px-4 border rounded mb-5 cardy text-2xl">قم بالتسجيل</button>
</form>

     </div>
        </>
    )
}