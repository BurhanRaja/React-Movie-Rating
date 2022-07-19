import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/components/Home/Home'
import MovieDetail from '../src/components/MovieDetail'
import SeriesDetails from '../src/components/SeriesDetails'


const ReactRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetail />}/>
            <Route path='/tv/:id' element={<SeriesDetails />}/>
        </Routes>
    )
}

export default ReactRouter