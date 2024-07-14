'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/Components/email';
import { Resend } from 'resend';
import MentorEmail from '@/app/Components/email/mentorStyle'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(data:any) => {
    const firstLast = `${data.firstName} ${data.lastName}`;
    const countryCode = `${data.countryCode}`;
    const phoneNumber = `${data.phoneNumber}`
    const email = `${data.email}`;
    const expertise = `${data.expertise}`
    const years = `${data.years}`
    const languages = `${data.languages}`
    const price = `${data.sessionPrice}`
    const introVid = `${data.introVid}`
    const country = `${data.country}`
    await resend.emails.send({
        from: 'Hey Fouad! <onboarding@resend.dev>',
        to: 'elie1400674@gmail.com',
        subject: "message from ELIE UwU",
        reply_to: email as string,
        react: <MentorEmail
        
        firstLast= {firstLast}
        email= {email}
        countryCode = {countryCode}
        phoneNumber = {phoneNumber}
        expertise = {expertise}
        years = {years}
        languages= {languages}
        price = {price}
        introVid = {introVid}
        country = {country}
        />
          })
}

