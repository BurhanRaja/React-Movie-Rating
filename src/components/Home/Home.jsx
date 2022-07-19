import React, {useEffect} from 'react'
import CardSlider from '../CardSlider/CardSlider'
import JoinSection from '../JoinSection'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPopularMovies, fetchPopularTVShows } from '../../features/movie&tv/popularAll';
import {fetchTopRatedMovies, fetchTopRatedTVShows } from '../../features/movie&tv/topRatedAll';


const Home = () => {
    const dispatch = useDispatch()
    
    const allpopularDatamovies = useSelector((state) => state.popularMovies.popularMovies)
    let popularMovies = allpopularDatamovies.results
    
    const allpopularDatatvShows = useSelector((state) => state.popularTVShows.popularTVShows)
    let popularTVShows = allpopularDatatvShows.results
    
    const allTopRatedDatamovies = useSelector((state) => state.topRatedMovies.topRatedMovies)
    let topRatedMovies = allTopRatedDatamovies.results
    
    const allTopRatedDatatvShows = useSelector((state) => state.topRatedTVShows.topRatedTVShows)
    let topRatedTVShows = allTopRatedDatatvShows.results
    
    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchPopularTVShows())
        dispatch(fetchTopRatedMovies())
        dispatch(fetchTopRatedTVShows())
    }, [dispatch])

    return (
        <div>
            <LandingTitle />
            <CardSlider key={1} cardtitle="What's Popular" movies={popularMovies} tvShows={popularTVShows} />
            <CardSlider key={2} cardtitle="Top Rated" movies={topRatedMovies} tvShows={topRatedTVShows} />
            <TrailerSlider />
            <CardSlider key={3} cardtitle="Trending" />
            <JoinSection />
        </div>
    )
}

export default Home