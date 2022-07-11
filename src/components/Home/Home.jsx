import React from 'react'
import MovieListing from '../MovieListing'
import LandingTitle from './LandingTitle'

const Home = () => {
    return (
        <div>
            <LandingTitle/>
            <MovieListing />
        </div>
    )
}

export default Home