"use client"


import * as z from "zod"
import { LoginSchema } from "../schemes/index"

import { CardWrapper } from '../Components/Card-Wrapper'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email:'',
            password:'',

        },
    });

const handleSubmit = () => {
    console.log('done!')
}

    return(
        <>
            <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref='/auth/register'
            showSocial
            >
            

<form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ahmed@hotmail.com" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2">Submit</button>
</form>

            </CardWrapper>
        </>
    )
}