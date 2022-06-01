import { Route, Routes } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar/NavBar.jsx'
import FrontBanner from './components/FrontBanner/FrontBanner.jsx'
import MySkills from './components/MySkills/MySkills.jsx'
import MyProjects from './components/MyProjects/MyProjects.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'

function App() {
  return (
    <div className="App">
      <div className='Display'>
        <NavBar />
        <div className='RoutesWrap'>
          <Routes>
              <Route path='/' element={<FrontBanner />} />
              <Route path='/skills' element={<MySkills />} />
              <Route path='/projects' element={<MyProjects />} />
              <Route path='/contact' element={<ContactMe />} />
              <Route path='*' element={<FrontBanner />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App