import type { NextApiRequest, NextApiResponse } from 'next';

import { client, google } from '@/hike/google';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  try {
    const { tokens } = await client.getToken(code as string);
    client.setCredentials(tokens);

    // Access the user's calendar data here
    const calendar = google.calendar({ version: 'v3', auth: client });
    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    res.status(200).json(events.data.items);
  } catch (error) {
    res.status(500).send('Error getting access token');
  }
}
