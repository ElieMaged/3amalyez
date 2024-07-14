'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/Components/email';
import { Resend } from 'resend';
import StudentEmail from '@/app/Components/email/studentStyle'


import image from 'https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg'


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: any) => {
  const firstLast = `${data.firstName} ${data.lastName}`;
  const email = `${data.email}`;
  const interests = `${data.interests}`
  const number = `${data.number}`
  console.log('Running on server');

  await resend.emails.send({
from: 'Hello Fouad! <onboarding@resend.dev>',
to: 'elie1400674@gmail.com',
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
