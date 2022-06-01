import { ReactComponent as PhoneIcon } from './icons/phone.svg'
import { ReactComponent as EmailIcon } from './icons/email.svg'
import { ReactComponent as LocationIcon } from './icons/globe.svg'
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg'
import { ReactComponent as GitHubIcon } from './icons/github.svg'

function ContactItem (props) {
    return (
        <div className='ContactItem'>
            <div className='ContactIcon'>
                {props.icon}
            </div>
            <div className='ContactInfo'>
                {
                    props.link
                    ?
                    <a className='ContactLink' href={props.link}>
                        {props.contact}
                    </a>
                    :
                    props.contact
                }
            </div>
        </div>
    )
}

export default function ContactMe () {
    return (
        <div className='ContactMe Page'>
            <div className='PageTitle'>
                contact me
            </div>
            <div className='ContactList'>
                <ContactItem contact='416-846-4188' icon={<PhoneIcon />} />
                <ContactItem contact='yhussain8@gmail.com' icon={<EmailIcon />} link='mailto:yhussain8@gmail.com' />
                <ContactItem contact='Toronto, ON' icon={<LocationIcon />} />
                <ContactItem contact='linkedin.com/in/yhussain8' icon={<LinkedInIcon />} link='https://www.linkedin.com/in/yhussain8/' />
                <ContactItem contact='github.com/yhussain8' icon={<GitHubIcon />} link='https://github.com/yhussain8' />  
            </div>
        </div>
    )
}