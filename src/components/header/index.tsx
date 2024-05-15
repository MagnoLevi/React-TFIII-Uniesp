import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className='link'>
                React experiment
            </Link>
        </div>
    )
}

export default Header;