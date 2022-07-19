import React, {useEffect} from 'react'
import CardSlider from '../CardSlider/CardSlider'
import JoinSection from '../JoinSection'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPopularMovies, fetchPopularTVShows } from '../../features/movie&tv/popularAll';
import {fetchTopRatedMovies, fetchTopRatedTVShows } from '../../features/movie&tv/topRatedAll';
import {fetchTrendingMovies, fetchTrendingTVShows } from '../../features/movie&tv/trendingAll';


const Home = () => {
    const dispatch = useDispatch()
    
    // Movies
    const allpopularDatamovies = useSelector((state) => state.popularMovieAndTV.popularMovies)
    let popularMovies = allpopularDatamovies.results
    const allTopRatedDatamovies = useSelector((state) => state.topRatedMovieAndTV.topRatedMovies)
    let topRatedMovies = allTopRatedDatamovies.results
    const allTrendingDatamovies = useSelector((state) => state.trendingMovieAndTV.trendingMovies)
    let trendingMovies = allTrendingDatamovies.results
    
    // TV Shows
    const allpopularDatatvShows = useSelector((state) => state.popularMovieAndTV.popularTVShows)
    let popularTVShows = allpopularDatatvShows.results
    const allTopRatedDatatvShows = useSelector((state) => state.topRatedMovieAndTV.topRatedTVShows)
    let topRatedTVShows = allTopRatedDatatvShows.results
    const allTrendingDatatvShows = useSelector((state) => state.trendingMovieAndTV.trendingTVShows)
    let trendingTVShows = allTrendingDatatvShows.results
    
    
    
    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchPopularTVShows())
        dispatch(fetchTopRatedMovies())
        dispatch(fetchTopRatedTVShows())
        dispatch(fetchTrendingMovies())
        dispatch(fetchTrendingTVShows())
    }, [dispatch])

    return (
        <div>
            <LandingTitle />
            <CardSlider key={1} cardtitle="What's Popular" movies={popularMovies} tvShows={popularTVShows} />
            <CardSlider key={2} cardtitle="Top Rated" movies={topRatedMovies} tvShows={topRatedTVShows} />
            <TrailerSlider />
            <CardSlider key={3} cardtitle="Trending" movies={trendingMovies} tvShows={trendingTVShows}/>
            <JoinSection />
        </div>
    )
}

export default Home