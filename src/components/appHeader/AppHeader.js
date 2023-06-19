import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <Link className="app__title" to="/">
                <span>Marvel</span> information portal
            </Link>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? '#9f0016' : 'inherit' })} to="/"
                        >
                            Characters
                        </NavLink>
                    </li>
                    /
                    <li>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? '#9f0016' : 'inherit'})}
                            to="/comics"
                        >
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;