import Head from 'next/head'
import Image from 'next/image'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects-home'
import Contact from './components/Contact';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Abd Techs Portfolio</title>
        <meta name="description" content="Developed with Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      

    </div>
  )
}
