import React from 'react'
import { Link } from 'react-router-dom';

import Logo from './YH_logo.svg';
import ResumePDF from './YHussain_Resume_Web.pdf';

class MenuBar extends React.Component {
    render() {
        return (
            <div className='MenuBar'>
                <div className='menuRow'>
                    <Link className='link myLogo' to='/'><img src={Logo} alt="YH logo"/></Link>
                    <Link className="link menuText" to='/skills'>skills</Link>
                    <Link className="link menuText" to='/projects'>projects</Link>
                    <Link className="link menuText" to='/contact'>contact</Link>
                </div>
                <div className='resumeSection'>
                    <a className='link menuText resumeButton' href={ResumePDF} target="_blank" rel="noreferrer">résumé</a>
                </div>
            </div>
        )
    }
}

export default MenuBar