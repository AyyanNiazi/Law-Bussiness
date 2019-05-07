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
import Footer from '../component/footer'
import bg404 from '../component/image/404/404-bg.jpg'; 
import one404 from '../component/image/404/404-1.png'; 
import two404 from '../component/image/404/404-2.png'; 
import three404 from '../component/image/404/404-3.png'; 
import four404 from '../component/image/404/404-4.png'; 

const NoMatch = ({location}) => (
    <div className='route' >
<div className='position-relative d-block my-0 mx-auto overflow-hidden fourzerofour' id='my404' style={{clear: 'both'}}>


    </div>
    </div>
)

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
                      <Route component={NoMatch}  />
                    </Switch>
                </Router>
                    <Footer />
            </React.Fragment>
         );
    }
}
 
export default Routes;