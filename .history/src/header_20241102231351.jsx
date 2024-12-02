
function Header() {
    // react components are only able to return one elememt only but you can tie children in the elements
    return (
        <header>
            <h1>My header in react</h1>
            <nav>
                <ol>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;