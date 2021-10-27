import React,{useState} from "react";
import { auth } from "./firebase-config";
import {createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInAnonymously,GithubAuthProvider } from "firebase/auth";
const Form = () => {
    const [registerEmail,SetRegisterEmail] = useState("");
    const [registerPassword,SetRegisterPassword] = useState("");
    const CreateAccount = async () => {
        try  {
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    const GoogleAuthentication = async () => {
        const provider = await new GoogleAuthProvider(auth);
        signInWithPopup(auth,provider)
    }
    const GithubAuthentication = async () => {
        const github = await new GithubAuthProvider(auth);
        signInWithPopup(auth,github)
    }
    const AnonAuthentication = async () => {
        await signInAnonymously(auth)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="formContainer">
            <div className="logo">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
            </div>
            <div className="formLogin">
                <div className="formTitle">
                <h2>Sign Up</h2>
                </div>
                <form action="" className="form" onSubmit={(e) => handleSubmit (e)}>
                    <input type="text" placeholder="Email" onChange={(e) => SetRegisterEmail(e.target.value)}/> <br/>
                    <input type="password" placeholder="Password"  onChange={(e) => SetRegisterPassword(e.target.value)}/><br/>
                    <div className="formButton">
                    <button className="button" onClick={CreateAccount}>Create An Account</button>
                    </div>
                    <div className="formOr">
                        <h4 className="formOption">or</h4>
                    </div>
                    <div className="formAuthentication">
                        <div className="formGoogle" onClick={GoogleAuthentication}><i class="fab fa-google"></i></div>
                        <div className="formGithub" onClick={GithubAuthentication}><i class="fab fa-github"></i></div>
                        <div className="formAnon" onClick={AnonAuthentication}><i class="fas fa-mask"></i></div>
                    </div>
                    <div className="credit">
                        <p>Made with <i class="fas fa-heart"></i>by Selemon Brahanu</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form
