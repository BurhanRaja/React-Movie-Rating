import React from 'react'
import CardSlider from '../CardSlider/CardSlider'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'


const Home = () => {
    return (
        <div>
            <LandingTitle/>
            <CardSlider key={1} cardtitle="What's Popular"/>
            <CardSlider key={2} cardtitle="Top Rated" />
            <TrailerSlider />
            <CardSlider key={2} cardtitle="Trending" />
        </div>
    )
}

export default Home