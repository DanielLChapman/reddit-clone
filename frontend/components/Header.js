import Nav from './Nav';
import Meta from './Meta';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faArrowDown} from '@fortawesome/free-solid-svg-icons'

const Header = () => (
    <div>
        <Meta />
        <div className="top-bar">
            <Link href="/" >
                <a className="website-icon">
                    <img src={`/icon.png`} /><span>Reddit</span></a>
            </Link>
            {// signed in only <Nav />
            }
            <div className="search-bar-main">
                <div className="search">
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                    <input type="text" className="searchTerm" placeholder="Search" />
                    
                </div>
            </div> 
            <section className="signin-login-button-container">
                <div className="signup-top-bar-button">
                    <button type="submit" className="signup-button">
                        Sign up
                    </button>
                </div>
                <div className="login-top-bar-button">
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </div>
            </section>

            <section className="signin-login-dropdown">
                <label htmlFor="signin-login-window">
                    <FontAwesomeIcon icon={faUserAlt} className="fa-user-alt " />
                    <FontAwesomeIcon icon={faArrowDown} className="fa-arrow-down " />
                </label>
                <input id="signin-login-window" type="checkbox" name="signin-login-window" />
                <div>
                    <button className="dropdown-button">
                        Log In / Sign Up
                    </button>
                </div>
            </section>
            
        </div>
    </div>
)

export default Header;