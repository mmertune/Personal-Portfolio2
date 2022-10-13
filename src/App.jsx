import React from 'react'
import './assets/css/app.css';
import {Contact, Hero, Header, Projects, Footer} from './pages'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App