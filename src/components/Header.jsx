import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="nav-container flex flex-row p-4" style={{"backgroundColor":"#031e40"}}>
                <div className="webname-container pl-6">
                    <a href="">
                    <img src="/assets/logo.svg" alt="Logo" className='webname w-36 h-auto' />
                    </a>
                </div>
                <ul className="navItem-container flex flex-row justify-center mx-3 font-semibold font-sans text-sm text-white">
                    <li className="nav-item mx-3"><a className='hover:text-sky-100' href="#">Movies</a></li>
                    <li className="nav-item mx-3"><a className='hover:text-sky-100' href="#">TV Shows</a></li>
                    <li className="nav-item mx-3"><a className='hover:text-sky-100' href="#">People</a></li>
                    <li className="nav-item mx-3"><a className='hover:text-sky-100' href="#">More</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header