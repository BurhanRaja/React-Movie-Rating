import React from 'react'
import MovieItem from './CardItem'
import "react-multi-carousel/lib/styles.css";
import '../css/MovieListing.css'

const listingCategories = [
    { name: "Streaming", style: "nav-item py-1 px-2 rounded-full bg-sky-900 text-white cursor-pointer" },
    { name: "Movies", style: "nav-item mx-1 ml-1 p-1 px-2 cursor-pointer" },
    { name: "TV Shows", style: "nav-item mx-1 mr-1 p-1 px-2 cursor-pointer" },
    { name: "In Theaters", style: "nav-item py-1 px-2 cursor-pointer" },
]

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const CardSlider = () => {
    return (
        <>
            <div className="popular-list flex font-sans m-7 p-2 align-middle">
                <div className="popular-title font-medium text-2xl">
                    <p>What's Popular</p>
                </div>
                <nav className=''>
                    <ul className='flex flex-row align-middle mx-3 outline outline-1 rounded-full'>
                        {listingCategories.map((item, index) => {
                            return <li key={index} className={item.style}>{item.name}</li>
                        })}
                    </ul>
                </nav>
            </div>

            <div className="slider-container flex justify-start items-center">
                <div className="slider whitespace-nowrap overflow-x-scroll p-2 scroll-smooth ml-3 z-10">
                    {slides.map((slide, index) => {
                        return <MovieItem key={index} />
                    })}
                </div>
            </div>


        </ >
    )
}

export default CardSlider