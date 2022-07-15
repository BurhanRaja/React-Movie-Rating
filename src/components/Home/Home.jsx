import React from 'react'
import CardSlider from '../CardSlider/CardSlider'
import JoinSection from '../JoinSection'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'


const Home = () => {
    return (
        <div>
            <LandingTitle />
            <CardSlider key={1} cardtitle="What's Popular" />
            <CardSlider key={2} cardtitle="Top Rated" />
            <TrailerSlider />
            <CardSlider key={3} cardtitle="Trending" />
            <JoinSection />
        </div>
    )
}

export default Home