import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="nav-container flex flex-row p-3">
                <div className="webname-container">
                    <img src="/assets/logo.svg" alt="Logo" className='webname w-4 h-auto' />
                </div>
                <ul className="navItem-container flex flex-row justify-center">
                    <li className="nav-item"><a href="#">Movies</a></li>
                    <li className="nav-item"><a href="#">TV Shows</a></li>
                    <li className="nav-item"><a href="#">People</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header