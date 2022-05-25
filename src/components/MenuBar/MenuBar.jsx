import React from 'react'

import { Link } from 'react-router-dom';

import logo from './YH_logo.svg';
import ResumePDF from './YHussain_Resume_Web.pdf';

class MenuBar extends React.Component {
    
    // state here

    // functions here

    // <Route path='/' element={<HeroBanner />} />
    // <Route path='/about' element={<AboutMe />} />
    // <Route path='/skills' element={<MySkills />} />
    // <Route path='/projects' element={<MyProjects />} />
    // <Route path='/contact' element={<ContactMe />} />
    // <Route path='*' element={<HeroBanner />} />


    render() {
        return (
            <div className='MenuBar'>
                

                {/* <div className='myLogo'>
                </div> */}

                <div className='menuRow'>
                    <Link className='link myLogo' to='/portfolio'><img src={logo} /></Link>
                    {/* <Link className="link menuText" to='/portfolio'>hello</Link> */}
                    <Link className="link menuText" to='/skills'>skills</Link>
                    <Link className="link menuText" to='/projects'>projects</Link>
                    <Link className="link menuText" to='/contact'>contact</Link>
                </div>

                <div className='resumeSection'>
                    <Link className="link menuText resumeButton" to={ResumePDF} target='_blank'>resume</Link>
                </div>

            </div>
        )
    }
}

export default MenuBar