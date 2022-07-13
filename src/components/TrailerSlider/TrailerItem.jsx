import React from 'react'
import styled from 'styled-components'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const TrailerItem = () => {
  return (
        <div className="poster ml-2 inline-block rounded-3xl mb-8">
            <a href="">
                <TrailerBackgorund alt="" className="w-80 h-60 mr-3 rounded-xl bg-cover transition-transform duration-500 hover:rounded-xl hover:scale-105">
                    <PlayArrowRoundedIcon className='text-white flex items-center flex-col hover:scale-125' style={{"fontSize":"103px", "transition":"transform 450ms cubic-bezier(0.4, 0, 0.2, 1)"}}/>
                </TrailerBackgorund>
            </a>
        </div>
  )
}

export default TrailerItem

const TrailerBackgorund = styled.div`
    background:linear-gradient(rgb(12 12 12),rgb(0 0 0 / 50%)),url(/assets/movie_one.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`