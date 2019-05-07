import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import pen from './image/pen.png'
import './header.css';
import './main.css';
    class Header extends Component {
            
        state = {
            scrollled: '',
        }
        componentDidMount(){
            window.addEventListener('scroll', ()=> {
                const isTop = window.scrollY < 100;
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
            })
        }
        render(props) { 
            // const { classes } = this.props;
            return ( 
              <div>

                <div className='top-head'>
                    <div className='container'>
                        <div className='top-under' >
                            <p> <span><i className='fa fa-phone'></i> Call us: +44 (357) 391 7591</span>
                                <i className='fa fa-envelope'></i>   info@lawconsultancy.co
                             </p>
                        </div>
                        <div className='under-social' >
                        <a href='#'><i className='fa fa-twitter'></i></a>
                        <a href='#'><i className='fa fa-facebook'></i></a>
                        <a href='#'> <i className='fa fa-feed'></i></a>
                        <a href='#'><i className='fa fa-skype'></i></a>
                        <a href='#'><i className='fa fa-linkedin'></i></a>
                        </div>
                    </div>
                </div>
            <div className={this.state.scrolled ? ' nav scrolled' : 'navreact'} > 
            <div className='container'>
                <nav className='navbar' role="navigation" aria-label="main navigation">
                    <div className='navbar-brand'>
                        <a className='navbar-item logo' href='/' >
                                                    {/* <img src=ight="28" /> */}
                                                    <i className='fa fa-balance-scale'></i> Law Bussiness
                        </a>
                        <a role="button" className='navbar-burger burger' aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className='navbar-end'>
                            <Link className='navbar-item' to=''>Home </Link> 
                            <Link className='navbar-item' to='/about'>About us </Link> 
                            <Link className='navbar-item' to='/contact' >Contact us</Link> 
                            {/* <a className='navbar-item' href='/about'> <Link>Home </Link> </a> */}
                            
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