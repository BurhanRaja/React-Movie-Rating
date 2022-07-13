import React from 'react'
import styled from 'styled-components'

const JoinSection = () => {
    return (
        <JoinBack className='w-full h-80 my-8 flex flex-row flex-1'>
            <div className="join-today p-2 text-white">
                <h2 className='title text-3xl font-extrabold text-white mt-3'>Join Today</h2>
                <div className="paragraphs flex flex-row text-left justify-start items-center p-7">
                    <div className="para px-5">
                    <p className=''>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Hotstar, and Amazon Prime Video.</p>
                    <button className="signUpp bg-indigo-700 my-4 p-3 rounded-md hover:bg-purple-700">Sign-up</button>
                    </div>
                    <ul className='px-5 mr-7 list-disc'>
                        <li>Enjoy TMDB ad free</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Filter by your subscribed streaming services and find something to watch</li>
                        <li>Log the movies and TV shows you've seen</li>
                        <li>Build custom </li>
                        <li>Contribute to and improve our database</li>
                    </ul>
                </div>
            </div>
        </JoinBack>
    )
}

export default JoinSection

const JoinBack = styled.div`
    background-image: url('/assets/Joinbackground.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`