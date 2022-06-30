/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
