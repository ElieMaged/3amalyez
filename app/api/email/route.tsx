'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import MentorEmail from '@/app/Components/email/mentorStyle'

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async(data:any) => {
  
    const firstLast = `${data.firstLast}`;
    const email = `${data.email}`;

    const sendEmail = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['narutossj23@yahoo.com'],
      subject: "Hello world",
        react: <MentorEmail
        firstLast= {firstLast}
        email= {email}
        />
          })
}

