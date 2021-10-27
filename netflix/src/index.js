import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
const Index = () => {
    const [login,SetLogin] = useState(false);
    onAuthStateChanged(auth,(user) => {
        if(user) {
            return (
                SetLogin(true)
            )
        } else {
            return (
                SetLogin(false)
            )
        }
    })
    if(login) {
        return (
           <Router>
               <Switch>
                   <Route exact path="/" component={Home}>
                   </Route>
               </Switch>
           </Router>
        )
    } else {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Form}></Route>
                </Switch>
            </Router>
        )
    }
};
ReactDOM.render(<Index/>,document.getElementById("root"))