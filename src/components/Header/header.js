import {Link} from "react-router-dom"
import './header.css'


const Header = () => (
    <div className='title-input-container'>
    <div className='header-text-container'>
            <h1 className='movie-heading'>Movies</h1>        
            

       <ul className='header-list-container'>
         <li className='header-text'>
            <Link className="link-text" to="/">
            Home
            </Link>
         </li>
         <li className='header-text'>
         <Link className="link-text" to="/about">
            About
            </Link>
         </li>
       </ul>
       </div>
       
    </div>
)

export default Header