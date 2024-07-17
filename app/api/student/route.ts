import {NextApiRequest, NextApiResponse} from 'next';
import { NextResponse } from 'next/server';
import {google} from "googleapis"


type SheetForm = {
  firstName:string
  lastName:string
  email:string
  interests:string
  number:number
}

export async function handler(
req:NextApiRequest,
res:NextApiResponse

){
  const body = req.body as SheetForm


  try {
// prepare auth
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets'
  ]
});

const sheets=google.sheets({
  auth,
  version:'v4'
});

const response = await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.SHEET_ID1,
  range: 'A1:D1', // Change this to match your sheet name and desired range
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [[`${body.firstName} ${body.lastName}`,  body.email, body.interests, body.number]]
  },
});
return NextResponse.json({ message: 'Data added successfully' }, { status: 200 });
} catch (error) {
  console.error(error);
  return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
}
}












// import { NextResponse } from 'next/server';
// import { google } from 'googleapis';

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const auth = new google.auth.GoogleAuth({
//       credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || ''),
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const sheets = google.sheets({ version: 'v4', auth });

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.SHEET_ID,
//       range: 'Sheet1!A1', // Change this to match your sheet name and desired range
//       valueInputOption: 'USER_ENTERED',
//       requestBody: {
//         values: [[`${body.firstName} ${body.lastName}`, body.email, body.interests, `${body.number}`]], // Adjust according to your form fields
//       },
//     });

//     return NextResponse.json({ message: 'Data added successfully' }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }