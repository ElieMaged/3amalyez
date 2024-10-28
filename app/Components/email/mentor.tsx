'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/Components/email';
import { Resend } from 'resend';
import MentorEmail from '@/app/Components/email/mentorStyle'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(data:any) => {
    const firstLast = `${data.firstLast}`;
    const email = `${data.email}`;

    await resend.emails.send({
        from: '3amaly Courses <onboarding@resend.dev>',
        to: `${email}`,
        subject: "3amaly Course Application",
        reply_to: '3amalycourses@gmail.com' as string,
        react: <MentorEmail
        firstLast= {firstLast}
        email= {email}
        />
          })
}

