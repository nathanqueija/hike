import { AppProps } from 'next/app';
// Importing the handlers for each domain
import '@/hike/auth/handlers';
import '@/hike/dashboard/handlers';

import '@/styles/globals.css';

import { init as initFirebase } from '@/hike/firebase';

initFirebase();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
