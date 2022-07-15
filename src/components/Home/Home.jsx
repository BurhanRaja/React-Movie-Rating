import React, {useEffect} from 'react'
import CardSlider from '../CardSlider/CardSlider'
import JoinSection from '../JoinSection'
import TrailerSlider from '../TrailerSlider/TrailerSlider'
import LandingTitle from './LandingTitle'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../../features/movies/popularMovie';


const Home = () => {
    const host = process.env.REACT_APP_MOVIE_URL
    const api_key = process.env.REACT_APP_MOVIE_NOT_API_KEY
    const urlType = "movie/popular"
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${host}/${urlType}?api_key=${api_key}&page=1`, {
                method: 'GET',
                headers: {
                    'Content-Type':"application/json"
                }
            });
    
            const jsonData = await response.json()
            dispatch(addPopularMovies(jsonData))
        }
        fetchData()
    }, [])
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