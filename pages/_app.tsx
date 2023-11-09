import Layout from '@/components/Layout';
import LanguageContextProvider from '@/lib/contexts/languageContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <LanguageContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </LanguageContextProvider>
}
