import Head from 'next/head'
import { Login } from './Components/Login';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  )
}
