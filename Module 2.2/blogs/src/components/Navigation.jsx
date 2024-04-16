import { Link } from 'react-router-dom';
import NavCSS from '../css/nav.css';

const Navigation = () => {
    return (
        <div>
	        <nav>
                <ul>
                    <li>
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li>
                        <Link to='/new'>New blog</Link>
                    </li>
                    <li>
                        <Link to='/pics/1' >Pic 1</Link>
                    </li>
                    <li>
                        <Link to='/pics/2' >Pic 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;