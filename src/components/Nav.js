import React from 'react'

const Nav = ({activeTab, handleTabChange}) => {
    return (
        <nav className="App-nav">
            <ul>
                <li className="App-nav-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={() => handleTabChange(0)}>Add Books</a>
                </li>
                <li className="App-nav-item">
                    <a onClick={() => handleTabChange(1)}>Assign Books</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;