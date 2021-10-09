import 'tailwindcss/tailwind.css'
import './styles.css'
import Footer from './Components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
