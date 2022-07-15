import React from 'react'
import { BellIcon, PlusIcon, SearchIcon } from '@heroicons/react/outline'

const navItems = [
    {name: "Movies", href:"/"},
    {name: "TV Shows", href:"/"},
    {name: "People", href:"/"},
]

const Header = () => {
    return (
        <div>
            <nav className="nav-container flex flex-row align-middle p-3" style={{ "backgroundColor": "#031e40" }}>
                <div className="webname-container ml-6 p-2">
                    <a href="">
                        <img src="/assets/logo.svg" alt="Logo" className='webname w-36 h-auto' />
                    </a>
                </div>
                <ul className="navItem-container flex flex-row justify-center mx-3 font-semibold font-sans text-sm text-white">
                    {navItems.map((item, index) => {
                        return <li key={index} className="nav-item mx-2 p-2 focus:outline-none focus:ring focus:bg-indigo-900 rounded"><a className="hover:text-white" href={item.href}>{item.name}</a></li>
                    })}
                </ul>
                <div className="all-btns flex justify-end flex-1">
                    <button className='add-btn text-white mx-4'>
                        <PlusIcon className='w-6 h-6 hover:cursor-pointer font-semibold' />
                    </button>
                    <button className='notification-btn text-white mx-3'>
                        <BellIcon className='w-6 h-6 hover:cursor-pointer' />
                    </button>
                    <button className="login-btn hover:cursor-pointer text-white mx-3 focus:outline-none focus:ring rounded focus:ring-indigo-900 font-semibold">
                        <span className='px-2'>Login</span>
                    </button>
                    <button className="login-btn hover:cursor-pointer text-white mx-2 focus:outline-none focus:ring rounded focus:ring-indigo-900 font-semibold">
                        <span className='px-1'>Join TMBD</span>
                    </button>
                    <button className="login-btn hover:cursor-pointer text-white mx-3">
                        <SearchIcon className='w-6 h-6 text-white ' />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header