import React from 'react'
import CardItem from './CardItem'
import "react-multi-carousel/lib/styles.css";
import '../css/CardSlider.css';

const listingCategories = [
    { name: "Streaming" },
    { name: "Movies" },
    { name: "TV Shows"},
    { name: "In Theaters"},
]

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const CardSlider = () => {
    return (
        <>
            <div className="popular-list flex font-sans m-7 p-2 align-middle items-center">
                <div className="popular-title font-medium text-2xl">
                    <p>What's Popular</p>
                </div>
                <nav className=''>
                    <ul className='flex flex-row align-middle mx-3'>
                        {listingCategories.map((item, index) => {
                            return <div><li key={index} className="tab-item mx-2 px-2 cursor-pointer text-sm">{item.name}</li>
                            
                            </div>
                        })}
                    </ul>
                </nav>
            </div>

            <div className="slider-container flex justify-start items-center">
                <div className="slider whitespace-nowrap overflow-x-scroll p-2 scroll-smooth ml-3 z-10">
                    {slides.map((slide, index) => {
                        return <CardItem key={index} />
                    })}
                </div>
            </div>


        </ >
    )
}

export default CardSlider