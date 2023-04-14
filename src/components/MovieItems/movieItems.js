
import './moviesItems.css'

const MovieItems = (props) => {
    const {movieDetails} = props
    const {poster, title, year} = movieDetails

    return (
        
        <li className="movie-item-container">
            <img className='image' alt={title} src={poster}/>
            <h1  className='title-text'>{title}</h1>
            <p className='year-text'>Year: {year}</p>
        </li>
    )
}


export default MovieItems