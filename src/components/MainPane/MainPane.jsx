import React from 'react'

import MenuBar from '../MenuBar/MenuBar.jsx';
import HeroBanner from '../HeroBanner/HeroBanner.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import MySkills from '../MySkills/MySkills.jsx';
import MyProjects from '../MyProjects/MyProjects.jsx';
import ContactMe from '../ContactMe/ContactMe.jsx';

class MainPane extends React.Component {
    
    state = {
        pageSelect: 'hello',
        pageList: ['hello', 'skills', 'project', 'contact']
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    // functions here

    render() {
        return (
            <div className='MainPane'>
                <MenuBar />
                <HeroBanner />
                <AboutMe />
                <MySkills />
                <MyProjects />
                <ContactMe />
            </div>
        )
    }
}

export default MainPane