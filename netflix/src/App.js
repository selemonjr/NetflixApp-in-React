import React from 'react'
import Row from './Row';
import requests from './requests';
const App = () => {
    return (
        <div>
           <Row title="Trending" largeImage fetchUrl={requests.fetchTrending}/>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        </div>
    )
}

export default App
