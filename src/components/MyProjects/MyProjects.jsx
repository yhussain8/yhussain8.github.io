import React from 'react'

import checkersPic from './img/checkers.png'
import tigerPinsPic from './img/tigerpins.png'
import innerTunerPic from './img/innertuner.png'

class MyProjects extends React.Component {
    render() {
        return (
            <div className='MyProjects Page'>
                <div className='PageTitle'>
                    my projects
                </div>
                <div className='ProjectList'>
                    <div className='ProjectCard'>
                        <div className='ProjectTitle'>
                            TTC Pathfinder
                        </div>
                        <div className='ProjectLinks'>
                            <div className='ProjectLink'>
                                <a href='https://github.com/yhussain8/ttc-path-finder'>Code</a>
                            </div>
                        </div>
                        <div className='ProjectDescription'>
                            My goal with this project was to build a pathfinding algorithm which provides transit routes between any two locations within the city of Toronto. For my source data, I relied on the Toronto Transit Commission’s <u><a href='https://open.toronto.ca/dataset/ttc-routes-and-schedules/'>Routes and Schedules dataset</a></u> found on Toronto’s <u><a href='https://open.toronto.ca'>Open Data portal</a></u>. Coded in Python, I used the pandas library for data analysis and wrangling, I used the numpy library to vectorize some of the steps in my model, I used the heapq library to set up priority queues, and I used Folium to visualize geographical data on a map.
                            <br/><br/>
                            This project was my introduction into pathfinding algorithms such as bread-first and depth-first search and learning how to reduce algorithmic complexity in order to reduce my model’s runtime. After quickly realizing the exponential nature of the problem, I came across a YouTube video regarding Djikstra’s shortest path algorithm which introduced me into the world of pathfinding problems. My initial hack and slash approach at implementing a shortest path algorithm took over 20 minutes to run. After some further research I came across MIT’s open course on <u><a href='https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/'>Introduction to Algorithms</a></u> where I learnt how to reduce the logarithmic complexity of my algorithm through a more formal implementation of Djikstra’s including the A star variant and an implementation of priority queues. I also reduced the size of my graph by consolidating the varied routes and times between two stops to a single path with average time. My second model is now 63 times faster and takes less than 20 seconds to run (at least on my laptop). Hopefully, with some more research and feedback I aim to reduce the runtime of my model even further.
                        </div>
                    </div>
                    <div className='ProjectCard'>
                        <div className='ProjectTitle'>
                            Checkers
                        </div>
                        <div className='ProjectLinks'>
                            <div className='ProjectLink'>
                                <a href='https://yhussain8.github.io/checkers/'>Demo</a>
                            </div>
                            <div className='ProjectLink'>
                                <a href='https://github.com/yhussain8/checkers'>Code</a>
                            </div>
                        </div>
                        <div className='ProjectDescription'>
                            With this project I wanted to recreate the two player Checkers board game as a static web application with a simple yet intuitive design using HTML, CSS, and Javascript. This was my introduction to the DOM (Document Object Model) interface and the MVC (Model-View-Controller) software design pattern. 
                            <br/><br/>
                            The most interesting challenge in implementing the game logic was forcing the player to make an attack move when one was available as this involved scanning the entire board for a list of all possible moves and forcing the player to only be able to select within a limited range of valid moves. The final version follows the complete set of official rules for American Checkers and prevents the user from making any illegal moves.
                        </div>
                        <div className='Screenshot'>
                            <img className='Screen' src={checkersPic} alt="Checkers app screenshot" />
                        </div>
                    </div>
                    <div className='ProjectCard'>
                        <div className='ProjectTitle'>
                            Tiger Pins
                        </div>
                        <div className='ProjectLinks'>
                            <div className='ProjectLink'>
                                <a href='https://tigerpins.herokuapp.com/'>Demo</a>
                            </div>
                            <div className='ProjectLink'>
                                <a href='https://github.com/alexmcdermid/tigerpins'>Code</a>
                            </div>
                            <div className='ProjectLink'>
                                <a href='https://trello.com/b/bYoQYg7j/tigerpins'>Trello</a>
                            </div>
                        </div>
                        <div className='ProjectDescription'>
                            Tiger Pins is a full-stack web application that allows users to create notes, known as pins, tagged to locations they’ve visited. Users can sign up for a user account and log in to save pins to their profile. They are then able to visually explore their pins on a map and share them with other users.
                            <br/><br/>
                            The app was a collaboration between two of my fellow software engineering bootcamp colleagues. We used Django for the back-end and used Materialize for our mobile-first front-end framework. We used the Google Maps API to convert user addresses into latitude and longitude coordinates and to power the map display for our user interface. We relied on Trello for project and task management and took an agile approach with daily stand ups.
                        </div>
                        <div className='Screenshot'>
                            <img className='Screen' src={tigerPinsPic} alt="Tiger Pins app screenshot" />
                        </div>
                    </div>
                    <div className='ProjectCard'>
                        <div className='ProjectTitle'>
                            InnerTuner
                        </div>
                        <div className='ProjectLinks'>
                            <div className='ProjectLink'>
                                <a href='https://innertuner.herokuapp.com/'>Demo</a>
                            </div>
                            <div className='ProjectLink'>
                                <a href='https://www.figma.com/file/2C6neztrND4rfIlKoksIRj/InnerTuner-SEI%2FUXDI?node-id=1349%3A177566'>Wireframe</a>
                            </div>
                            <div className='ProjectLink'>
                                <a href='https://github.com/yhussain8/innertuner'>Code</a>
                            </div>
                        </div>
                        <div className='ProjectDescription'>
                            InnerTuner is a habit tracking app built to capture moment-to-moment progress towards improving daily goals such as getting enough water, sleep, and exercise. This project was the result of a one-week project sprint in collaboration between software engineering and UX/UI design bootcamp students.
                            <br/><br/>
                            Working together, we took 3 days to develop the design theme along with low and medium fidelity wireframes using Figma and then took another 4 days to build a full-stack MERN (Mongo / Express / React / NodeJS) web app hosted on Heroku. Unfortunately, we were only able to go so far with our limited time. You may notice some flaws with the visual design, but the final version looks best on mobile and allows for a single user to sign up, log in, and track their data for at least two habits (sleep and exercise) with working CRUD (Create Read User Delete) back-end logic.
                        </div>
                        <div className='Screenshot'>
                            <img className='Screen' src={innerTunerPic} alt="Inner Tuner app screenshot" />
                        </div>
                    </div>
                    <div className='ProjectCard'>
                        <div className='ProjectTitle'>
                            Yelp Restaurant Recommender
                        </div>
                        <div className='ProjectLinks'>
                            <div className='ProjectLink'>
                                <a href='https://github.com/yhussain8/yelp-recommender'>Code</a>
                            </div>
                        </div>
                        <div className='ProjectDescription'>
                            This was my capstone project for the Data Science bootcamp at BrainStation. My goal was to build a restaurant recommendations engine built on top of the Yelp Open Dataset. I experimented with both user-item and item-item filtering, and then combined both approaches together into a hybrid collaborative based recommender system. The current model can either generate recommendations using a cold start (no or low user history) or can provide more sophisticated recommendations for a particular user if given their user history consisting of their restaurant ratings and reviews.
                        </div>
                    </div>
                    <div className='ProjectCard'>
                        <div className='ProjectTitle'>
                            My Portfolio Site
                        </div>
                        <div className='ProjectLinks'>
                            <div className='ProjectLink'>
                                <a href='https://github.com/yhussain8/yhussain8.github.io'>Code</a>
                            </div>
                        </div>
                        <div className='ProjectDescription'>
                            This website was built using React and hosted via GitHub pages. It was designed with a single responsive break point at 700 px to be mobile friendly.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProjects