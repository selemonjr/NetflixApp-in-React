import React, {useState,useEffect} from "react"
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/"
const Row = ({fetchUrl,title,largeImage}) => {
    const [movies,SetMovies] = useState([]);
    const [trailer,SetTrailer] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            SetMovies(request.data.results);
            return request
        }
        fetchData()
    },[fetchUrl]);
    const opts = {
        height:"390",
        width:"100%",
        playerVars: {
            autoplay:1,
        }
    }
    const click = (movies) => {
        if(trailer) {
            SetTrailer("");
        } else {
            movieTrailer(movies?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                SetTrailer(urlParams.get("v"))
            }).catch(error => {
                console.log(error)
            })
        }
    }
    return (
        <>
         <h1 className="netflixTitle">{title}</h1>
         <div className="row_container">
         {movies.map((movie) => {
                const {poster_path,id,backdrop_path} = movie;
            return (
                <div>
                <img onClick={() => click(movie)}  className={`smallImage ${largeImage && "largePoster"}`} key={id} src={largeImage ? base_url + backdrop_path : base_url + poster_path} alt="" />
                </div>
            )
        })}
         </div>
         {trailer && <YouTube videoId={trailer} opts={opts}/>}
        </>
    )
}
export default Row
