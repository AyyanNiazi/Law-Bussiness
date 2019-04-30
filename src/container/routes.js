import React,{Component} from 'react';
import {BrowserRouter as Router,
Route,Switch} from 'react-router-dom'
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utilities/setAuthToken";
// import { setCurrentUser, logout } from "../store/action/authAction";
// import store from '../store/index'
import Header from '../component/header';
import Home from '../component/home'
import About from '../component/about'
import Contact from '../component/contact'


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }
    render() { 
        return ( 
            <React.Fragment>
            
                <Router>
                    <Header />
                    <Switch> 
                      <Route exact path='/' component={Home} />
                      <Route  path='/about' component={About} />
                      <Route   path='/contact' component={Contact} />
                    </Switch>
                </Router>
            </React.Fragment>
         );
    }
}
 
export default Routes;