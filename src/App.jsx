import Head from './components/head';
import About from './components/about';
import Interests from './components/interests';
import Footer from './components/thefooter';

export default function App(){
  return(
    <>
      <div className="main-wrapper">
        <Head />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  )
}