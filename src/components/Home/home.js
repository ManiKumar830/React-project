import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header/header'
import MovieItems from '../MovieItems/movieItems'
import './home.css'


class Home extends Component {
  state = {moviesListEl: [], searchInput: ""}

  componentDidMount() {
    this.getMoviesList()
  }

  getMoviesList = async (searchInput) => {
     const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=11311ce0`

     const response = await fetch(url)

     if (response.ok === true) {
      const data = await response.json()

      const newList = data.Search.map(eachItem => ({
        id: uuidv4(),
        poster: eachItem.Poster,
        title: eachItem.Title,
        type: eachItem.Type,
        year: eachItem.Year,
        imdbID: eachItem.imdbID
      }))

      this.setState({
        moviesListEl: newList
      })
     
     } 
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredList = searchInput => {
    const {moviesListEl} = this.state
    const updatedList = moviesListEl.filter(eachItem => 
          eachItem.title.toLowerCase().includesOf(searchInput)
       )
     this.setState({moviesListEl: updatedList})   
  }
 
    render() {
     const {moviesListEl, searchInput} = this.state
     const filterList = this.getMoviesList(searchInput)
     console.log(filterList)

      return (
          <div className='bg-container'>
            <Header />
            <div>
              <input value={searchInput} onChange={this.onChangeInput} placeholder='Search' className='input-element' type='search'/>
       </div>
            <div>
              <ul className='ul-list-container'>
                {moviesListEl.map(eachItem => 
                  <MovieItems key={eachItem.id} movieDetails={eachItem}/>)
                  }
              </ul>
            </div>
          </div>
      )
    }
  }
  export default Home