import { AppProps } from 'next/app';
// Importing the handlers for each domain
import '@/app/auth/handlers';
import '@/app/dashboard/handlers';

import '@/styles/globals.css';

import { init as initFirebase } from '@/app/firebase';

initFirebase();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
