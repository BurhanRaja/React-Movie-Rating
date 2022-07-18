import React, {useEffect} from 'react'
import CardSlider from '../CardSlider/CardSlider'
import JoinSection from '../JoinSection'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import {fetchPopularMovies } from '../../features/movies/popularAll';


const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPopularMovies())
    }, [dispatch])

    const allDatamovies = useSelector((state) => state.popularMovies.popularMovies)
    let movies = allDatamovies.results

    return (
        <div>
            <LandingTitle />
            <CardSlider key={1} cardtitle="What's Popular" movieArray={movies} />
            <CardSlider key={2} cardtitle="Top Rated" />
            <TrailerSlider />
            <CardSlider key={3} cardtitle="Trending" />
            <JoinSection />
        </div>
    )
}

export default Home