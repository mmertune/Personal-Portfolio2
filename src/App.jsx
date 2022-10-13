import React from 'react'
import './assets/css/app.css';
import {Contact, Hero, Header, Projects, Footer, About} from './pages'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App