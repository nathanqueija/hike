import { google } from 'googleapis';

import { googleApiConfig } from '@/hike/env';

const client = new google.auth.OAuth2(
  googleApiConfig.clientId,
  googleApiConfig.clientSecret,
  googleApiConfig.redirectURI
);

google.options({ auth: client });

export { client, google };
