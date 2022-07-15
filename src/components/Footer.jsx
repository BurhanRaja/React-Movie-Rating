import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="all-lists flex flex-row p-7 pb-16 justify-center text-white" style={{ "background-color": "rgb(3, 30, 64)" }}>
                <div className="logo">
                    <img src="/assets/logo2.svg" alt="TMDB Logo" className='w-32 h-32 mx-12' />
                    <button className='bg-indigo-900 p-3 m-2 rounded-lg hover:bg-violet-800'>Login</button>
                </div>
                <div className="basics mx-5 p-2 text-left">
                    <h2 className='text-xl font-sans font-extrabold uppercase'>The Basics</h2>
                    <ul>
                        <li><a href="">About TMDB</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Support Forums</a></li>
                        <li><a href="">API</a></li>
                        <li><a href="">System Status</a></li>
                    </ul>
                </div>
                <div className="involved mx-5 p-2 text-left">
                    <h2 className='text-xl font-sans font-extrabold uppercase'>Get Involved</h2>
                    <ul>
                        <li><a href="">Contribution Bible</a></li>
                        <li><a href="">Add a Movie</a></li>
                        <li><a href="">Add a TV Show</a></li>
                    </ul>
                </div>
                <div className="community mx-5 p-2 text-left">
                    <h2 className='text-xl font-sans font-extrabold uppercase'>Community</h2>
                    <ul>
                        <li><a href="">Guidelines</a></li>
                        <li><a href="">Discussions</a></li>
                        <li><a href="">Leaderboard</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
                <div className="legal mx-5 p-2 text-left">
                    <ul>
                        <h2 className='text-xl font-sans font-extrabold uppercase'>Legal</h2>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">API Terms of Use</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer