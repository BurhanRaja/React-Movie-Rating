import React from 'react'
import styled from 'styled-components'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const TrailerItem = (props) => {
  return (
        <div className="poster ml-2 mx-5 inline-block rounded-3xl mb-8">
            <a href="">
                <TrailerBackgorund alt="" posterImg={props.poster} className="w-80 h-52 mr-3 rounded-xl bg-cover transition-transform duration-500 hover:rounded-xl hover:scale-105">
                    <PlayArrowRoundedIcon className='text-white flex items-center flex-col hover:scale-125' style={{"fontSize":"103px", "transition":"transform 450ms cubic-bezier(0.4, 0, 0.2, 1)"}}/>
                </TrailerBackgorund>
            </a>
            <div className="trailer-name"><p>{props.trailerName}</p></div>
        </div>
  )
}

export default TrailerItem

const TrailerBackgorund = styled.div`
    background:${ props => `linear-gradient(rgb(0 0 0 / 50%), rgb(12 12 12)),url("https://image.tmdb.org/t/p/w220_and_h330_face/${props.posterImg}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`