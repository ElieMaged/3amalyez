import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {

  try {
    const body = await request.json();

    // Log the received body for debugging
    console.log('Received body:', body);

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || '{}'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID2,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[`${body.firstName} ${body.lastName}`, body.email, body.number, body.expertise, body.years, body.languages, body.sessionPrice, body.introVid, body.country]]
      },
    });

    // Log the Google Sheets API response for debugging
    console.log('Google Sheets API response:', response.data);

    return NextResponse.json({ message: 'Data added successfully', response: response.data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ message: 'Internal server error'|| 'Unknown error' });
  }
}