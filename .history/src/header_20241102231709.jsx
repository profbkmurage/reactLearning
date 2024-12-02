
function Header() {
    // react components are only able to return one elememt only but you can tie children in the elements
    return (
        <header>
            <h1>My header in react</h1>
            <nav>
                <ol>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">blog</a></li>
                    <li><a href="">contact</a></li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;