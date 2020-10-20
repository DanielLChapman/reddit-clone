import Nav from './Nav';
import Meta from './Meta';
import Link from 'next/link'

const Header = () => (
    <div>
        <Meta />
        <div className="top-bar">
            <Link href="/" >
                <a className="website-icon">
                    <img src="./icon.png" /><span>Reddit</span></a>
            </Link>
            {// signed in only <Nav />
            }
            <div className="search-bar-main">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
)

export default Header;