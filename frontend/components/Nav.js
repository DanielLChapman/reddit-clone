import Link from 'next/link'

const Nav = () => (
    <div>
        <ul>
            <li>    
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/r/account">
                    <a>Accounts</a>
                </Link>
            </li>
        </ul>
    </div>
)

export default Nav;