
import Header from '../Header/header'

import './about.css'

const About = () =>( 
    <div className='about-container'>
        <Header/>
        <div className='about-text-container'>
                <p className='about-text'>
                    A movie library project typically refers to a software application or system that allows users to organize and manage a collection of movies. The project may include a database of movies, information about their ratings, reviews, trailers, and other related data.
                </p>

                <p className='about-text'>
                    The project can be implemented in different ways, but it usually involves a user interface that enables users to search for movies, filter them by different criteria (e.g., genre, year, rating), add new movies to their collection, and track the movies they have watched.
                </p>

                <p className='about-text'>  
                    Some advanced features that can be included in a movie library project may include the ability to generate personalized recommendations based on a user's movie history, integrate with online streaming services to watch movies directly from the app, or connect with other users to share movie recommendations and reviews.
                </p>

                <p className='about-text'>
                    Overall, a movie library project is a great way to keep track of your movie collection and discover new films to watch.
                </p>
        </div>
    </div>
)
export default About