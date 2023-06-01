import { BrowserRouter } from "react-router-dom"
import {   
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  MoonCanvas, 
  StarsCanvas 
} from './components'

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <div className="h-screen relative  grow z-0">
            <Hero className="h-full"/>
            <StarsCanvas />
          </div>
          <About />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>

    </BrowserRouter>
  )
}

export default App
