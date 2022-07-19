import React, { useState } from 'react'
import CardItem from './CardItem'
import "react-multi-carousel/lib/styles.css";
import '../../css/CardSlider.css';
import { ChevronRightIcon } from '@heroicons/react/outline';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const CardSlider = ({ cardtitle, movies, tvShows }) => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <div className="popular-list flex flex-start font-sans m-7 mb-3 p-2 items-center">
                <div className="popular-title font-medium text-2xl">
                    <p>{cardtitle}</p>
                </div>
                <div className="flex items-center ml-10 text-sm font-semibold">
                    <a href='/'>
                    <button className='flex items-center'>More<ChevronRightIcon className='w-5 h-5' /></button>
                    </a>
                </div>
            </div>

            <Box sx={{ width: '100%', padding:"0px 30px" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Movies" value="1"  className='text-base' />
                            <Tab label="TV Shows" value="2"  className='text-base' />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{"padding":"20px 0px 0px 0px"}}>
                    <div className="slider whitespace-nowrap overflow-x-scroll py-2 scroll-smooth">
                        {movies !== undefined && movies.map((movie, index) => {
                            return <CardItem key={index} poster={movie.poster_path} pathDetail={`movie/${movie.id}`} />
                        })}
                    </div> 
                    </TabPanel>
                    <TabPanel value="2" style={{"padding":"20px 0px 0px 0px"}}>
                    <div className="slider whitespace-nowrap overflow-x-scroll py-2 scroll-smooth">
                        {tvShows !== undefined && tvShows.map((tvShow, index) => {
                            return <CardItem key={index} poster={tvShow.poster_path} pathDetail={`tv/${tvShow.id}`} />
                        })}
                    </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </ >
    )
}


export default CardSlider