import React from 'react'

class MySkills extends React.Component {
    render() {
        return (
            <div className='MySkills Page'>
                <div className='PageTitle'>my technical skills</div>
                <div className='SkillList'>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            programming languages
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>JavaScript</div>
                            <div className='BulletItem'>Python</div>
                            <div className='BulletItem'>SQL</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            databases
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>PostgreSQL</div>
                            <div className='BulletItem'>MySQL</div>
                            <div className='BulletItem'>MongoDB</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            front-end web tech
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>ReactJS</div>
                            <div className='BulletItem'>HTML</div>
                            <div className='BulletItem'>CSS</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            back-end web tech
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>NodeJS</div>
                            <div className='BulletItem'>Express</div>
                            <div className='BulletItem'>Django</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            data science
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>SciPy</div>
                            <div className='BulletItem'>Scikit-learn</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            web scraping & automation
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>Beautiful Soup</div>
                            <div className='BulletItem'>Selenium</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            data analysis
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>NumPy</div>
                            <div className='BulletItem'>Pandas</div>
                            <div className='BulletItem'>Matplotlib</div>
                            <div className='BulletItem'>Streamlit</div>
                        </div>
                    </div>
                    <div className='SkillCard'>
                        <div className='SkillCategory'>
                            data visualization
                        </div>
                        <div className='BulletList'>
                            <div className='BulletItem'>Tableau</div>
                            <div className='BulletItem'>Plotly</div>
                            <div className='BulletItem'>Bokeh</div>
                            <div className='BulletItem'>Folium</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills