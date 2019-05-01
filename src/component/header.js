import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import pen from './image/pen.png'
import './header.css';

    class Header extends Component {
            
        state = {
            scrollled: '',
        }
        componentDidMount(){
            window.addEventListener('scroll', ()=> {
                const isTop = window.scrollY < 100;
                console.log(isTop);
                if (isTop !== true){
                    this.setState({  scrolled: true   })
                }
                else{
                    this.setState({ scrolled: false   })
                }
            })
        }
        
        componentWillMount(){
            window.removeEventListener('scroll ', ()=>{
                console.log('remover')
            })
        }
        render(props) { 
            // const { classes } = this.props;
            return ( 
              <div>

                <div class='top-head'>
                    <div class='container'>
                        <div class='top-under' >
                            <p> <i class="fa fa-phone"></i> Call us: +923070084689
                                <i class="fa fa-envelope"></i>   appscorrer@gmail.com
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
            <div className={this.state.scrolled ? ' nav scrolled' : 'navreact'} > 
            <div className='container'>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item logo"  >
                                                    {/* <img src=ight="28" /> */}
                                                    <i class="fa fa-balance-scale"></i> Law Bussiness
                        </a>
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-end">
                            <Link class="navbar-item" to=''>Home </Link> 
                            <Link class="navbar-item" to='/about'>About </Link> 
                            <Link class="navbar-item" to='/contact' >Contact
                             </Link> 
                            {/* <a class="navbar-item" href='/about'> <Link>Home </Link> </a> */}
                            
                        </div>
                    </div>
                    </nav>
                    </div>
            </div>
{/* 1st section */}
    
        
              </div>
            );
        }
    }



    export default Header