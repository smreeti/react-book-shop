import React from 'react'

const Nav = ({handleTabChange}) => {
    return (
        <nav className="App-nav">
            <ul>
                <li className="App-nav-item">
                    <a href="/#" onClick={() => handleTabChange(0)}>Add Books </a>
                </li>
                <li className="App-nav-item">
                    <a href="/#" onClick={() => handleTabChange(1)}>Assign Books</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav