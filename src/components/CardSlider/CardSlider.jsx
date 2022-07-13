import React from 'react'
import CardItem from './CardItem'
import "react-multi-carousel/lib/styles.css";
import '../../css/CardSlider.css';


const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const CardSlider = ({cardtitle, tabNames}) => {
    
    return (
        <>
            <div className="popular-list flex font-sans m-7 p-2 justify-space items-center">
                <div className="popular-title font-medium text-2xl">
                    <p>{cardtitle}</p>
                </div>
                <nav className=''>
                    <ul className='flex flex-row align-middle mx-3 items-center'>
                            <li className="tab-item mx-2 px-2 cursor-pointer text-sm">Streaming</li>
                            <li className="tab-item mx-2 px-2 cursor-pointer text-sm">Streaming</li>
                            <li className="tab-item mx-2 px-2 cursor-pointer text-sm">Streaming</li>
                            <li className="tab-item mx-2 px-2 cursor-pointer text-sm">Streaming</li>
                        
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