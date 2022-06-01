import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './media/logo.svg'
import NavBarOpenIcon from './media/list.svg'
import NavBarCloseIcon from './media/x.svg'
import ResumePDF from './media/YHussain_Resume_Web.pdf'

class NavBar extends React.Component {

    state = {
        hideNavBar: true,
    }

    handleNavButton = () => {
        this.setState({hideNavBar: !this.state.hideNavBar})
    }

    handleNavLink = () => {
        this.setState({hideNavBar: true})
    }

    render() {
        return (
            <div className='NavBarWrap'>
                <div className='NavBarDesktop'>
                    <div className='LinksWrap'>
                        <Link className='LogoWrap' to='/'><img className='Logo' src={Logo} alt="Site logo"/></Link>
                        <Link className="NavLink" to='/skills'>skills</Link>
                        <Link className="NavLink" to='/projects'>projects</Link>
                        <Link className="NavLink" to='/contact'>contact</Link>
                    </div>
                    <a className='ResumeButton' href={ResumePDF} target="_blank" rel="noreferrer">résumé</a>
                </div>
                <div className='NavBarMobile'>
                    <div className='NavMenu'>
                        <Link className='LogoWrap' to='/' onClick={() => this.handleNavLink()}><img className='Logo' src={Logo} alt="Site logo"/></Link>
                        <img className='NavBarIcon' src={this.state.hideNavBar ? NavBarOpenIcon : NavBarCloseIcon} onClick={() => this.handleNavButton()} alt="Open nav bar"/>
                    </div>
                    {
                        this.state.hideNavBar
                        ?
                        <div></div>
                        :
                        <div className='NavDropDown'>
                            <Link className="MobileLink" to='/skills' onClick={() => this.handleNavLink()}>skills</Link>
                            <Link className="MobileLink" to='/projects' onClick={() => this.handleNavLink()}>projects</Link>
                            <Link className="MobileLink" to='/contact' onClick={() => this.handleNavLink()}>contact</Link>
                            <a className='MobileLink' href={ResumePDF} target="_blank" rel="noreferrer" onClick={() => this.handleNavLink()}>résumé</a>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default NavBar