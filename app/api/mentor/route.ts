import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || ''),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID2,
      range: 'Sheet1!A1', // Change this to match your sheet name and desired range
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[`${body.firstName} ${body.lastName}`, body.email, body.number, body.expertise, body.years, body.languages, body.sessionPrice, body.introVid, body.country]]
      },
    });

    return NextResponse.json({ message: 'Data added successfully' }, { status: 200 });
  } catch (error) {
  }
}