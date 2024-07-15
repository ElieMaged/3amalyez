'use client'
import { useState } from 'react'
import { sendEmail } from '../../Components/email/student'
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'


export default function StudentSignup() {

    const onSubmit = async (data: FieldValues) => {
sendEmail(data)
await new Promise((resolve) => setTimeout(resolve, 2000));
reset();
    }



    
const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues
} = useForm();

 
    return(
        <>
      
  <div className='flex flex-row text-black justify-center'>
<form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto" > 
<div className="grid md:grid-cols-2 md:gap-2 mt-5">
    <div className="relative z-0 w-full mb-5 group">
        <input {
            ...register('firstName', {
                required: "First Name is required"
            })
        } name='firstName' type="text"  id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">First name</label>
        {errors.firstName && (
            <p className='text-red-600'>{`${errors.firstName.message}`}</p>
        )}
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input {
            ...register('lastName', {
                required:"Last Name is required",
            })
        } name='lastName'  type="text"  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">Last name</label>
        {errors.lastName && (
            <p className='text-red-600'>{`${errors.lastName.message}`}</p>
        )}
    </div>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input {
        ...register('email', {
            required: "Email is required",
        })
      } name='email' type="email"  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">Email address</label>
      {errors.email && (
            <p className='text-red-600'>{`${errors.email.message}`}</p>
        )}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input {
        ...register('interests', {
            required: "Interests are required"
        })
      } type="text"  id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">Subjects of interest (Business etc.)</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input {
        ...register('number', {
            required: "Number is required"
        })
      } type="number"  id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 left-2">Whatsapp Number</label>
      {errors.number && (
            <p className='text-red-600'>{`${errors.number.message}`}</p>
        )}
  </div>
  
  <button disabled={isSubmitting} type="submit" className="text-white py-2 px-4 border rounded mb-5 cardy text-xl">Signup as a Student</button>
</form>
     </div>
        </>
    )
}