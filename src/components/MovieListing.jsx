import React from 'react'
import MovieItem from './MovieItem'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Slider from "react-slick";

const listingCategories = [
    { name: "Streaming", style: "nav-item py-1 px-2" },
    { name: "Movies", style: "nav-item mx-1 ml-1 p-1 px-2" },
    { name: "TV Shows", style: "nav-item mx-1 mr-1 p-1 px-2" },
    { name: "In Theaters", style: "nav-item py-1 px-2" },
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 14,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: { max: 2000, min: 1324 },
        items: 7,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1324, min: 861 },
        items: 5,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 861, min: 300 },
        items: 3,
        slidesToSlide: 3
    }
}

const MovieListing = () => {
    return (
        <div>
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
                <Carousel responsive={responsive} className="">
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                </Carousel>
        </div >
    )
}

export default MovieListing