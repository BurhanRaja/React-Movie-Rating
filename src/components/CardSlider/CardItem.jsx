import React from 'react'

const CardItem = () => {
    return (
        <div className="poster ml-2 inline-block rounded-3xl mb-8">
            <a href="">
                <img src="/assets/movie_one.jpg" alt="" className='w-40 object-contain h-60 mr-3 rounded-xl transition-transform duration-500 hover:rounded-xl hover:scale-105' />
            </a>
        </div>
    )
}

export default CardItem