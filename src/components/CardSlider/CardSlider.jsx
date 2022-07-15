import React from 'react'
import CardItem from './CardItem'
import "react-multi-carousel/lib/styles.css";
import '../../css/CardSlider.css';
import { ChevronRightIcon } from '@heroicons/react/outline';

import { getPopularMovies } from '../../features/movies/popularMovie';
import { useSelector } from 'react-redux/es/exports';


const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const CardSlider = ({cardtitle}) => {
    
    const allDatamovies = useSelector(getPopularMovies)
    console.log(allDatamovies)
    console.log(allDatamovies.results)
    let renderPopularMovies = null

    if (allDatamovies.results != 0) {
        // const movies = allDatamovies.popularMovies.results
        slides.map((movie, index) => {
            return <CardItem key={index} poster={movie.poster_path} />
        })
    }
    
    return (
        <>
            <div className="popular-list flex flex-start font-sans m-7 p-2 items-center">
                <div className="popular-title font-medium text-2xl">
                    <p>{cardtitle}</p>
                </div>
                <nav className=''>
                    <ul className='flex flex-row align-middle mx-3 items-center'>
                            <li className="tab-item mx-2 px-2 cursor-pointer text-sm"><a href='/'>Movies</a></li>
                            <li className="tab-item mx-2 px-2 cursor-pointer text-sm"><a href='/'>TV Shows</a></li>
                        
                    </ul>
                </nav>
                    <div className="flex items-center ml-10 text-sm font-semibold">
                        <button>More</button><ChevronRightIcon className='w-5 h-5' />
                    </div>
            </div>

            <div className="slider-container flex justify-start items-center">
                <div className="slider whitespace-nowrap overflow-x-scroll p-2 scroll-smooth ml-3 z-10">
                    {renderPopularMovies}
                </div>
                
            </div>


        </ >
    )
}

export default CardSlider