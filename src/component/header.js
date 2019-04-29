import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import pen from './image/pen.png'
import './header.css';

    class Header extends Component {
                 
        render(props) { 
            // const { classes } = this.props;
            return ( 
              <div>

                <div class='top-head' >
                        <div class='top-under' >
                            <p> <i class="fa fa-mobile"></i> Call us: 1-800-643-4300
                                <i class="fa fa-envelope"></i>   info@lawbusinessdemo.web
                             </p>
                        </div>
                        <div class='under-social' >
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-linkedin-in"></i>
                        </div>
                </div>

                 <nav class="navbar main-nav" role="navigation" aria-label="main navigation" >
                        <div class="navbar-brand">
                            <a class="navbar-item logo"  >
                                {/* <img src=ight="28" /> */}
                                <i class="fa fa-gavel"></i> Law Bussiness
                            </a>

                            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" class="navbar-menu">
                            
                            {/* <div class="navbar-start">
                                <Link to='/' class="navbar-item">
                                    Home
                                  </Link>
                                <Link to='/about' class="navbar-item">
                                    About us
                                </Link>
                                <Link to='/contact' class="navbar-item">
                                    Contact us
                                </Link>

                            </div> */}

                            <div class="navbar-start right-home">
                                 <Link to='/' class="navbar-item">
                                    Home
                                  </Link>
                                <Link to='/about' class="navbar-item">
                                    About us
                                </Link>
                                <Link to='/contact' class="navbar-item">
                                    Contact us
                                </Link>

                            </div>
                        </div>
                </nav>

{/* 1st section */}
        <main class='container' > 
                <section class='sec-1' >
                        <div class='columns sec-1-first' >
                            <div class='column'><i class="fa fa-pen-fancy"></i>WYSIWYG Editor<br/>
                            <p>A real-time WYSIWYG editor: you are able to customize the look of your website directly on page and see your changes right away!</p>
                             <h6 style={{color:'red'}} >Read more <i class="fa fa-chevron-right"></i></h6>
                             </div>
                            <div class='column'><i class="fa fa-book"></i> Solid Law Practic<br/>                            
                            <p>Custom admin panel significantly extends original Wordpress functionality, turning it into an all-in-one tool for content management.</p>
                            <h6 style={{color:'red'}} >Read more <i class="fa fa-chevron-right"></i></h6>                            
                             </div>
                            <div class='column'><i class="fa fa-briefcase"></i> Special Design 
                            <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                            <h6 style={{color:'red'}} >Read more <i class="fa fa-chevron-right"></i></h6>                                               
                            </div>
                            <div class='column'><i class="fa fa-anchor"></i> Powerful Admin<br/>                            
                            <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                            <h6 style={{color:'red'}} >Read more <i class="fa fa-chevron-right"></i></h6>                            
                             </div>
                        </div>
                </section>

                {/* 2nd section */}

                <section class='sec-2'  >
                            <div class="columns">
                                <div class="column is-four-fifths" >
                                    <h1>All people are equal before the law. A good attorney is what makes a difference.</h1>
                                </div>
                                <div class="column"><a class="button sec-2-btn is-large">Download</a></div>
                            </div>
                            
                            {/* 2nd part */}
                            <br/>
                            <div class='columns' >
                                <div class='column' ></div>
                                <div class='column' ></div>
                                <div class='column' ></div>
                                <div class='column' ></div>
                            </div>
                </section>
         </main> 
        
              </div>
            );
        }
    }



    export default Header