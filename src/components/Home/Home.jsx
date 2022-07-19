import React, {useEffect, useState} from 'react'
import CardSlider from '../CardSlider/CardSlider'
import JoinSection from '../JoinSection'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPopularMovies, fetchPopularTVShows } from '../../features/movies/popularAll';


const Home = () => {
    const dispatch = useDispatch()
    
    const allDatamovies = useSelector((state) => state.popularMovies.popularMovies)
    let movies = allDatamovies.results
    
    const allDatatvShows = useSelector((state) => state.popularTVShows.popularTVShows)
    let tvShows = allDatatvShows.results
    
    
    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchPopularTVShows())
    }, [dispatch])

    return (
        <div>
            <LandingTitle />
            <CardSlider key={1} cardtitle="What's Popular" popularmovies={movies} populartvShows={tvShows} />
            <CardSlider key={2} cardtitle="Top Rated" />
            <TrailerSlider />
            <CardSlider key={3} cardtitle="Trending" />
            <JoinSection />
        </div>
    )
}

export default Home