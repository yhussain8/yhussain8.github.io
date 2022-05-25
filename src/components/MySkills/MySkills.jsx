import React from 'react'

class MySkills extends React.Component {
    
    // state here

    // functions here

    render() {
        return (
            <div className='MySkills slideText'>
                <div className='title center'>my technical skills</div>
                <div className='allSkillCards'>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            programming languages
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>JavaScript</div>
                            <div className='bulletItem'>Python</div>
                            <div className='bulletItem'>SQL</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            databases
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>PostgreSQL</div>
                            <div className='bulletItem'>MySQL</div>
                            <div className='bulletItem'>MongoDB</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            front-end web tech
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>ReactJS</div>
                            <div className='bulletItem'>HTML</div>
                            <div className='bulletItem'>CSS</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            back-end web tech
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>NodeJS</div>
                            <div className='bulletItem'>Express</div>
                            <div className='bulletItem'>Django</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            data science
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>SciPy</div>
                            <div className='bulletItem'>Scikit-learn</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            web scraping & automation
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>Beautiful Soup</div>
                            <div className='bulletItem'>Selenium</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            data analysis
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>NumPy</div>
                            <div className='bulletItem'>Pandas</div>
                            <div className='bulletItem'>Matplotlib</div>
                            <div className='bulletItem'>Streamlit</div>
                        </div>
                    </div>
                    <div className='skillCard'>
                        <div className='subTitle'>
                            data visualization
                        </div>
                        <div className='bulletList'>
                            <div className='bulletItem'>Tableau</div>
                            <div className='bulletItem'>Plotly</div>
                            <div className='bulletItem'>Bokeh</div>
                            <div className='bulletItem'>Folium</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills