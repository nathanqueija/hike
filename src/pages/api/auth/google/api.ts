import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/hike/google';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  res.redirect(url);
}
