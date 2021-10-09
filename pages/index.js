import Head from 'next/head'
import { Jobs } from './Components/Jobs';
import { Navbar } from './Components/Navbar';
import { Candidates } from './Components/Candidates';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Jobs />
      <Candidates />
    </div>
  )
}
