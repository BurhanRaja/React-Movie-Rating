import React from 'react'

const LandingTitle = () => {
    return (
        <div>
            <div className="main-container bg-gradient-to-r from-sky-900 to-sky-600">
                <div className="landing-container flex flex-col px-8 py-12 font-sans">
                    <div className="welcome flex flex-row mx-4 mt-4 mb-2 text-white">
                        <p className='text-5xl font-extrabold '>Welcome.</p>
                    </div>
                    <div className="welcome2 text-3xl flex flex-row mb-4 text-white" style={{ "marginLeft": "2vw" }}>
                        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                    </div>

                    <div className="search-input-btn flex flex-row mt-6 mb-2" style={{ "marginLeft": "2.4vw" }}>
                        <input type="text" className='px-4 w-11/12 rounded-full focus:outline-none text-lg' placeholder='Search for a movie, tv show or person.....' style={{ "paddingTop": "13px", "paddingBottom":"13px" }} />
                        <button className="search-btn px-5 py-2 hover:text-gray-900 rounded-full bg-gradient-to-r from-sky-600 to-teal-400 text-lg font-extrabold text-gray-50" style={{ "margin": "-1px -43px" }}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingTitle