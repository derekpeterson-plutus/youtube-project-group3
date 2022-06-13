import { React,Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import youtube_logo from '../assets/yt_logo_rgb_dark.png';

class NavBar extends Component {
    render() {
    
    return(
        <nav className='navbar'>
      <div className='logo'>
        <img src={youtube_logo} width='150px' alt='Youtube logo' />
      </div>
      <ul>
        <li>
          <Link to='/'>Home </Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
     )
    }
}

export default NavBar; 