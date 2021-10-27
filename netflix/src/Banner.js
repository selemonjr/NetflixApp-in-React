import React,{useState,useEffect} from "react";
import requests from "./requests";
import axios from "./axios";
const Banner = () => {
    const [banner,SetBanner] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const randomBannerImg = await axios.get(requests.fetchNetflixOriginals)
        SetBanner(randomBannerImg.data.results[Math.floor(Math.random() * randomBannerImg.data.results.length - 1)])
        console.log(banner)
        return randomBannerImg
        }
        fetchData()
    },[])
    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    return (
        <>
        <div key={banner.id}className="banner_container" style={{
            background:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center",
            backgroundRepeat:"no-repeat",
        }}>
            <div className="banner_movie_content">
            <div className="banner_container_name">
                <h2 className="bannerName">{banner?.original_name}</h2>
            </div>
            <div className="banner_container_button">
                <button className="play">Play</button>
                <button className="myList">My List</button>
            </div>
            <div className="button_container_overview">
                <h3 className="bannerOverview">{truncate(banner?.overview,150)}</h3>
            </div>
            </div>
        </div>
        </>
    )
}

export default Banner
