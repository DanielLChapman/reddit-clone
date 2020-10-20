import Nav from './Nav';
import Meta from './Meta';

const Header = () => (
    <div>
        <Meta />
        <div className="bar">
            <a href="">Reddit Clone</a>
        </div>
        <Nav />
        <div className="sub-bar">
            <p>Search</p>
        </div>
    </div>
)

export default Header;