import React from 'react'
import TrailerItem from './TrailerItem'
import "../../css/TrailerSlider.css";


const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TrailerSlider = () => {
    return (
        <div className=' bg-gradient-to-r from-sky-900 to-sky-700 my-4'>
            <div className="popular-list flex font-sans mx-7 my-1 px-1 py-7 justify-space items-center">
                <div className="popular-title font-medium text-2xl">
                    <p>Latest Trailers</p>
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
                        return <TrailerItem key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default TrailerSlider