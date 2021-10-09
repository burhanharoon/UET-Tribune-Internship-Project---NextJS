import Head from 'next/head'
import { Jobs } from './Components/Jobs';
import { Navbar } from './Components/Navbar';
import { Candidates } from './Components/Candidates';
import { Testimonials } from './Components/Testimonials';
import { Stats } from './Components/Stats';
import { TopJobs } from './Components/TopJobs';
import { Footer } from './Components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Jobs />
      <Testimonials />
      <Stats />
      <TopJobs />
      <Candidates />
    </div>
  )
}
