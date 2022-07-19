import React, { useEffect, useState } from 'react'
import TrailerItem from './TrailerItem'
import "../../css/TrailerSlider.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TrailerSlider = ({ cardtitle, movies, tvShows }) => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    // "https://www.youtube.com/watch?v="


    return (
        <div className=' bg-gradient-to-r from-sky-900 to-sky-700 font-sans p-4'>
            <div className="font-medium text-2xl text-white pl-10 mb-3 pt-2 flex flex-start items-center">
                <p>{cardtitle}</p>
            </div>
            <Box sx={{ width: '100%', padding: "0px 30px" }} className='text-white'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='text-white'>
                        <TabList value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            aria-label="primary tabs example" 
                            className='text-white'>
                            <Tab label="Movies" value="1" className='text-base' style={{"color":"white"}} />
                            <Tab label="TV Shows" value="2" className='text-base' style={{"color":"white"}} />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{ "padding": "20px 0px 0px 0px" }}>
                        <div className="slider whitespace-nowrap overflow-x-scroll py-2 scroll-smooth">
                            {movies !== undefined && movies.map((movie, index) => {
                                return <TrailerItem key={index} poster={movie.poster_path} pathDetail={movie.id} trailerName={movie.original_title}/>
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel value="2" style={{ "padding": "20px 0px 0px 0px" }}>
                        <div className="slider whitespace-nowrap overflow-x-scroll py-2 scroll-smooth">
                            {tvShows !== undefined && tvShows.map((tvShow, index) => {
                                return <TrailerItem key={index} poster={tvShow.poster_path} pathDetail={`tv/${tvShow.id}`} trailerName={tvShow.original_title}/>
                            })}
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default TrailerSlider