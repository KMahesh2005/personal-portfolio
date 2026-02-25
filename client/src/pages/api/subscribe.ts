import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.waveplus@turing-nimbus-465107-i2.iam.gserviceaccount.com,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const sheets = google.sheets({ version: 'v4', auth });
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: '1TmsSAWqOA8HOvGRVcPYS9yYFrdChB1zejBsVzGBTU4o', // Your Sheet ID
      range: 'Sheet1!A:B', // Target sheet and columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[req.body.email, new Date().toISOString()]], // Data to append
      },
    });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    res.status(500).json({ error: 'Failed to save subscription' });
  }
}