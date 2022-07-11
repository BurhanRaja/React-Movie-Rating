import React from 'react'

const MovieItem = () => {
    return (
        <div>
        <div className=' mx-3'>
            <a href="#!" className='rounded-lg'>
                <img class="rounded-lg w-44 h-64" src="/assets/movie_one.jpg" alt="" />
            </a>
        </div>
        <div className="movie-title font-extrabold pt-2 pb-1"><h3>The Boys</h3></div>
        <div className="release-date">Date</div>
        </div>
    )
}

export default MovieItem