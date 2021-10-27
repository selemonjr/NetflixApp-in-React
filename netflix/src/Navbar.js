import React,{useState,useEffect} from "react";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config"
const Navbar = () => {
    const logOut = async () => {
        await signOut(auth)
    }
    const [show,SetShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                SetShow(true)
            } else {
                SetShow(false)
            }
        });
    },[])
    return (
        <div>
            <div className={show ? "navContentDark" : "navbarContent"}>
              <img className="netflixLogo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
            <div className="right">
            <img onClick = {logOut} className="netflixAvatar" src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" alt="" />
            </div>
            </div>
        </div>
    )
}

export default Navbar
