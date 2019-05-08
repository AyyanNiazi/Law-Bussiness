import React,{Component} from 'react';
import {BrowserRouter as Router,
Route,Switch} from 'react-router-dom'
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utilities/setAuthToken";
// import { setCurrentUser, logout } from "../store/action/authAction";
// import store from '../store/index'
import Header from '../component/header'
import Home from '../component/home'
import About from '../component/about'
import Contact from '../component/contact'
import Footer from '../component/footer'
import '../component/not-found.css'

const NoMatch = ({location}) => (
    <div className='route' >
        
<div className='mycontainer container-star'>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-1'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
  <div className='star-2'></div>
</div>
<div className='container container-bird'>
  <div className='bird bird-anim'>
    <div className='bird-container'>
      <div className='wing wing-left'>
        <div className='wing-left-top'></div>
      </div>
      <div className='wing wing-right'>
        <div className='wing-right-top'></div>
      </div>
    </div>
  </div>
  <div className='bird bird-anim'>
    <div className='bird-container'>
      <div className='wing wing-left'>
        <div className='wing-left-top'></div>
      </div>
      <div className='wing wing-right'>
        <div className='wing-right-top'></div>
      </div>
    </div>
  </div>
  <div className='bird bird-anim'>
    <div className='bird-container'>
      <div className='wing wing-left'>
        <div className='wing-left-top'></div>
      </div>
      <div className='wing wing-right'>
        <div className='wing-right-top'></div>
      </div>
    </div>
  </div>
  <div className='bird bird-anim'>
    <div className='bird-container'>
      <div className='wing wing-left'>
        <div className='wing-left-top'></div>
      </div>
      <div className='wing wing-right'>
        <div className='wing-right-top'></div>
      </div>
    </div>
  </div>
  <div className='bird bird-anim'>
    <div className='bird-container'>
      <div className='wing wing-left'>
        <div className='wing-left-top'></div>
      </div>
      <div className='wing wing-right'>
        <div className='wing-right-top'></div>
      </div>
    </div>
  </div>
  <div className='bird bird-anim'>
    <div className='bird-container'>
      <div className='wing wing-left'>
        <div className='wing-left-top'></div>
      </div>
      <div className='wing wing-right'>
        <div className='wing-right-top'></div>
      </div>
    </div>
  </div>
  <div className='container-title'>
    <div className='title'>
    
      <div className='numberr'>4</div>
      <div className='moon'>
        <div className='face'>
          <div className='mouth'></div>
          <div className='eyes'>
            <div className='eye-left'></div>
            <div className='eye-right'></div>
          </div>
        </div>
      </div>
      <div className='numberr'>4</div>
    </div>
    <div className='subtitle'>Oops. Looks like you took a wrong turn.</div>
    <a href='/' className='buttonc'>Go back</a>
  </div>
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