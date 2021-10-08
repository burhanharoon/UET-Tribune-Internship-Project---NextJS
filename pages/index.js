import Head from 'next/head'
import { Jobs } from './Components/Jobs';
import { Navbar } from './Components/Navbar';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Jobs />

    </div>
  )
}
