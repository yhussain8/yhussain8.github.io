import './App.css';

import { Route, Routes } from 'react-router-dom';

import LeftPane from './components/LeftPane/LeftPane.jsx';
import MainPane from './components/MainPane/MainPane.jsx';
import RightPane from './components/RightPane/RightPane.jsx';

import MenuBar from './components/MenuBar/MenuBar.jsx';
import HeroBanner from './components/HeroBanner/HeroBanner.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import MySkills from './components/MySkills/MySkills.jsx';
import MyProjects from './components/MyProjects/MyProjects.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';


function App() {
  return (
    <div className="App">
      <LeftPane />
      <div className='MidPane'>
        <MenuBar />
        <div className='HomePage'>
          <Routes>
              <Route path='/portfolio' element={<HeroBanner />} />
              <Route path='/about' element={<AboutMe />} />
              <Route path='/skills' element={<MySkills />} />
              <Route path='/projects' element={<MyProjects />} />
              <Route path='/contact' element={<ContactMe />} />
              <Route path='*' element={<HeroBanner />} />
          </Routes>
        </div>
      </div>
      <RightPane />
    </div>
  );
}

export default App;
