import { Link } from "react-router-dom";
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <a href="#home" className="header__logo">
                    <img src={`${process.env.PUBLIC_URL}/icons/double_beans_white.svg`} alt="logo" />
                </a>

                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/coffe-shop" className="header__link">Coffee house</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/our-coffe" className="header__link">Our coffee</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/pleasure" className="header__link">For your pleasure</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
