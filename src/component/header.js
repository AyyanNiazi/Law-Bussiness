import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import pen from './image/pen.png'
import './header.css';

    class Header extends Component {
                 
        render(props) { 
            // const { classes } = this.props;
            return ( 
              <div>

                <div class='top-head'>
                    <div class='container'>
                        <div class='top-under' >
                            <p> <i class="fa fa-mobile"></i> Call us: 1-800-643-4300
                                <i class="fa fa-envelope"></i>   info@lawbusinessdemo.web
                             </p>
                        </div>
                        <div class='under-social' >
                        <a href='#'><i class="fa fa-twitter"></i></a>
                        <a href='#'><i class="fa fa-facebook"></i></a>
                        <a href='#'> <i class="fa fa-feed"></i></a>
                        <a href='#'><i class="fa fa-skype"></i></a>
                        <a href='#'><i class="fa fa-linkedin"></i></a>
                        </div>
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
                                 <Link to='/' class="navbar-item link">
                                    Home
                                  </Link>
                                <Link to='/about' class="navbar-item link ">
                                    About us
                                </Link>
                                <Link to='/contact' class="navbar-item link">
                                    Contact us
                                </Link>

                            </div>
                        </div>
                </nav>

{/* 1st section */}
    
        
              </div>
            );
        }
    }



    export default Header