import { Link } from 'react-router-dom'
import '../css/header.css'

const Header = () => {
    return (
        <div className='header'>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/aurora'>Aurora</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
