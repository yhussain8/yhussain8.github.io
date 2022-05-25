import React from 'react'

import { ReactComponent as PhoneIcon } from './icons/phone.svg';
import { ReactComponent as EmailIcon } from './icons/email.svg';
import { ReactComponent as LocationIcon } from './icons/globe.svg';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from './icons/github.svg';

class ContactMe extends React.Component {
    render() {
        return (
            <div className='ContactMe slideText'>
                <div className='title center'>contact me</div>
                <div className='contactList'>
                    <div className='contactIcons'>
                        <div className='contactInfoItem'><PhoneIcon /></div>
                        <div className='contactInfoItem'><EmailIcon /></div>
                        <div className='contactInfoItem'><LocationIcon /></div>
                        <div className='contactInfoItem'><LinkedInIcon /></div>
                        <div className='contactInfoItem'><GitHubIcon /></div>
                    </div>
                    <div className='contactInfo'>
                        <div className='contactInfoItem'>416-846-4188</div>
                        <div className='contactInfoItem'>
                            <a href='mailto:yhussain8@gmail.com'>yhussain8@gmail.com</a>
                        </div>
                        <div className='contactInfoItem'>Toronto, ON</div>
                        <div className='contactInfoItem'>
                            <a href='https://www.linkedin.com/in/yhussain8/'>linkedin.com/in/yhussain8</a>
                        </div>
                        <div className='contactInfoItem'>
                            <a href='https://github.com/yhussain8'>github.com/yhussain8</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe