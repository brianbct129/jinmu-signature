import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cinzel.className}>
      <Component {...pageProps} />
    </main>
  );
}
