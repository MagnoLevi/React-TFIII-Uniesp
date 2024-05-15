import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <Link to="/">
            <div className="header">
                <h1 className='title'>React experiment</h1>
            </div>
        </Link>
    )
}

export default Header;