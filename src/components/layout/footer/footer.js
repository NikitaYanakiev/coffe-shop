import { Link } from "react-router-dom";
import IconBeans from "../../common/iconBeans/iconBeans";
import "./footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <a href="#home" className="footer__logo">
                        <img src={`${process.env.PUBLIC_URL}/icons/double_beans_black.svg`} alt="logo" />
                    </a>

                    <nav className="footer__menu">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to="/coffe-shop" className="footer__link">
                                    Coffee house
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/our-coffe" className="footer__link">
                                    Our coffee
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/pleasure" className="footer__link">
                                    For your pleasure
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <IconBeans beansColor={'black'}/>
            </div>
        </footer>
    );
}

export default Footer;
