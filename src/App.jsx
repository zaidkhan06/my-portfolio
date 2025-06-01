import { BrowserRouter } from "react-router-dom";

import {Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer } from "./components";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Education />
        <Tech />
        {/* <Project /> */}
        
        {/* <Experience /> */}
        {/* <Achievement /> */}
        <Profile/>
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
