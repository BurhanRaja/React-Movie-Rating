import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/components/Home/Home'
import MovieDetail from '../src/components/MovieDetail'


const ReactRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/movie/:moviename' element={<MovieDetail />}/>
        </Routes>
    )
}

export default ReactRouter