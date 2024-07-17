import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Parse credentials
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || '{}');
    
    // Check if credentials are valid
    if (!credentials.client_email || !credentials.private_key) {
      throw new Error('Invalid Google credentials');
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID_1,
      range: 'Sheet1!A1', // Ensure this matches your sheet name and desired range
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[`${body.firstName} ${body.lastName}`, body.email, body.interests, body.number]]
      },
    });

    console.log('Sheets API Response:', response.data);

    return NextResponse.json({ message: 'Data added successfully', data: response.data }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/mentor:', error);
    return NextResponse.json({ message: 'Internal server error'}, { status: 500 });
  }
}