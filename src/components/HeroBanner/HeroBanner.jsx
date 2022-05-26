import React from 'react'

class HeroBanner extends React.Component {
    render() {
        return (
            <div className='HeroBanner slideText'>
                <div className='hello'>hello world</div>
                <div className='title'>I'm Yousuf, a full-stack web developer and data science enthusiast and I want to build applications that unleash the power of our data.</div>
                <div className='text'>With my background in business intelligence and analytics, I've gained lots of experience in creating workflows that transform data into clarity and insight.</div>
                <div className='text'>I am passionate about solving complex problems with algorithms and machine learning in order to empower users with solutions that are meaningful and interactive.</div>
                
                {/* 
                <div className='text'>Hoping to solve tougher problems, I joined a data science bootcamp where I was introduced to the world of Python and machine learning.</div>
                <div className='text'>There I discovered my passion for building end-to-end interactive solutions which lead me to a software engineering bootcamp.</div>
                <div className='text'>I aspire to leverage my newfound skills to build applications that empower users by offering them clarity and insight.</div>
                <div className='text'>I am a recent graduate of two coding bootcamps with a background in business intelligence and analytics. I aspire to develop full-stack applications remixing open datasets with traditional algorithms and machine learning to build solutions with simple, meaningful, insightful, and empowering user experiences.</div>
                */}
            </div>
        )
    }
}

export default HeroBanner