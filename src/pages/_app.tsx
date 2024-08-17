import type { AppProps } from 'next/app'
import '../style/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}