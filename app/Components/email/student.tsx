'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/Components/email';
import { Resend } from 'resend';
import StudentEmail from '@/app/Components/email/studentStyle'
// import IntlTelInput from 'intl-tel-input/react';
// import 'intl-tel-input/build/css/intlTelInput.css';
import { GoogleSpreadsheet } from 'google-spreadsheet';




import image from 'https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg'


const resend = new Resend(process.env.RESEND_API_KEY);

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.GOOGLE_SERVICE_PRIVATE_KEY;
  

export const sendEmail = async (data: any) => {
  const firstLast = `${data.firstName} ${data.lastName}`;
  const email = `${data.email}`;
  const interests = `${data.interests}`
  const number = `${data.number}`;

  console.log('Running on server');

  await resend.emails.send({
from: 'Hello Fouad! <onboarding@resend.dev>',
to: '3amalycourses@gmail.com',

subject: "message from ELIE UwU",
reply_to: email,
// text: `I am signing up as a Learner
// My name is ${firstLast}, my email is: ${email}, I am interested in: ${interests}
// and my whatsapp number is: ${number}`
react: <StudentEmail
firstLast= {firstLast}
email={email}
phone = {number}
interests= {interests}

/>
  })
}
