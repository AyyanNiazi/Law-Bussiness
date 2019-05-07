import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import l1 from './image/box1.jpeg'
import l2 from './image/box2.jpeg'
import l3 from './image/box3.jpeg'
import l4 from './image/box4.jpeg'
import member from './image/member.jpg';
import logo1 from './image/logo1.png'
import logo2 from './image/logo2.png'
import logo3 from './image/logo3.png'
import logo4 from './image/logo4.png'
import law from './image/law.jpg'
import law1 from './image/law-1.jpg'
import law2 from './image/law-2.jpg'    
import law3 from './image/law-3.jpg'
import twitter from './image/twitter.png';
import facebook from './image/fb.png';
import vimeo from './image/vimeo.png';
import person from './image/person.jpg'
import './header.css';
import './main.css';



class Home extends Component {

    render(props) {
        return (
            <div>
            <div>  
                <div className='slider'>
                    <input name='input-slider' id='input-slide-0' type='radio' className='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-1' type='radio' className='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-2' type='radio' className='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-3' type='radio' className='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-autoplay' type='radio' className='input-slide' checked />
                    <ul>
                    <li className='slide-0'></li>
                    <li className='slide-1'></li>
                    <li className='slide-2'></li> 
                    <li className='slide-3'></li>        
                    </ul>
                    <div className='slide-description'>
                    <label className='slide-0'>
                        <img src={law} />
                        <div className='scontent'>
                            <h3>Right Way</h3>
                            <h5>to get legal help!</h5>
                        </div>
                    </label>
                    <label className='slide-1'>
                    <img src={law1} />
                    <div className='scontent'>
                            <h3>Free Legal Consultancy </h3>
                            <h5>Sources of help for people who qualify as low-income</h5>
                        </div>
                    </label>
                    <label className='slide-2'>
                    <img src={law2} />
                    <div className='scontent'>
                            <h3>Online Legal Help</h3>
                            <h5>We connect consumers and lawyers across the World</h5>
                        </div>
                    </label>
                    <label className='slide-3'>
                    <img src={law3} />
                    <div className='scontent'>
                            <h3>Legal Advice in Minutes</h3>
                            <h5>Real Lawyers. Real Answers. Right Now.</h5>
                        </div>
                    </label>
                    </div>
                    <div className='slider-arrow-prev'>
                    <label className='slide-0' htmlFor='input-slide-0'></label>
                    <label className='slide-1' htmlFor='input-slide-1'></label>
                    <label className='slide-2' htmlFor='input-slide-2'></label>
                    <label className='slide-3' htmlFor='input-slide-3'></label>
                    </div>
                    <div className='slider-arrow-next'>
                    <label className='slide-0' htmlFor='input-slide-0'></label>
                    <label className='slide-1' htmlFor='input-slide-1'></label>
                    <label className='slide-2' htmlFor='input-slide-2'></label>
                    <label className='slide-3' htmlFor='input-slide-3'></label>
                    </div>        
                    <div className='slider-dot'>
                    <label className='slide-0' htmlFor='input-slide-0'></label>
                    <label className='slide-1' htmlFor='input-slide-1'></label>
                    <label className='slide-2' htmlFor='input-slide-2'></label>
                    <label className='slide-3' htmlFor='input-slide-3'></label>
                    </div>        
                </div>
            </div>
            <div>
                <main className='container' >
                    <section className='sec-1' >
                        <div className='columns sec-1-first' >
                            <div className='column display-two-768'><i className="fa fa-edit iconc"></i>
                            <h2>WYSIWYG Editor</h2>
                                <p>A real-time WYSIWYG editor: you are able to customize the look of your website directly on page and see your changes right away!</p>
                                <h6 style={{ color: 'red' }} >Read more <i className="fa fa-chevron-right"></i></h6>
                            </div>
                            <div className='column display-two-768'><i className="fa fa-book iconc"></i>
                            <h2> Solid Law Practic</h2>
                                <p>Custom admin panel significantly extends original Wordpress functionality, turning it into an all-in-one tool for content management.</p>
                                <h6 style={{ color: 'red' }} >Read more <i className="fa fa-chevron-right"></i></h6>
                            </div>
                            <div className='column display-two-768'><i className="fa fa-briefcase iconc"></i> 
                            <h2>Special Design</h2>
                            <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i className="fa fa-chevron-right"></i></h6>
                            </div>
                            <div className='column display-two-768'><i className="fa fa-anchor iconc"></i> 
                            <h2>Powerful Admin</h2>
                                <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i className="fa fa-chevron-right"></i></h6>
                            </div>
                        </div>
                    </section>

                    {/* 2nd section */}

                    <section className='sec-2'  >

                        <div className="columns first">
                            <div className="column is-four-fifths" >
                                <h1>All people are equal before the law. A good attorney is what makes a difference.</h1>
                            </div>
                            <div className="column ver-align-center">
                                <div className='btnContainer'>
                                    <a className="button sec-2-btn is-large">Download</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='heading'>Solid law practise</h4>
                        </div>
                        {/* 2nd part */}
                        <div className='columns' >
                            <div className='column display-two-768' >
                            <div className="box box1">
                                <div className="box__right">
                                    <div>
                                        <h5>Bussiness, Legal</h5>
                                        <a href=''> With Smile to Work</a>
                                    </div> 
                                </div>
                                <div className="box__left">
                                    <div>
                                        <h5>Bussiness, Legal</h5>
                                        <a href=''> With Smile to Work</a>
                                    </div>  
                                </div>
                                <div className="box__top">
                                    <div>
                                        <h5>Bussiness, Legal</h5>
                                        <a href=''> With Smile to Work</a>
                                    </div> 
                                </div>
                                <div className="box__bottom">
                                    <div>
                                        <h5>Bussiness, Legal</h5>
                                        <a href=''> With Smile to Work</a>
                                    </div> 
                                </div>
                                <div className="box__center">
                                    <div>
                                        <h5>Bussiness, Legal</h5>
                                        <a href=''> With Smile to Work</a>
                                    </div> 
                                </div>
                            </div>
                            </div>
                            <div className='column display-two-768' >
                            <div className="box box2">
                            <div className="box__right">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> Handshake</a>
                                    </div> 
                                </div>
                                <div className="box__left">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> Handshake</a>
                                    </div>  
                                </div>
                                <div className="box__top">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> Handshake</a>
                                    </div> 
                                </div>
                                <div className="box__bottom">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> Handshake</a>
                                    </div> 
                                </div>
                                <div className="box__center">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> Handshake</a>
                                    </div> 
                                </div>
                            </div>
                            </div>
                            <div className='column display-two-768' >
                            <div className="box box3">
                            <div className="box__right">
                                    <div>
                                        <h5>Bussiness, Team</h5>
                                        <a href=''> Have No Time</a>
                                    </div> 
                                </div>
                                <div className="box__left">
                                    <div>
                                        <h5>Bussiness, Team</h5>
                                        <a href=''> Have No Time</a>
                                    </div>  
                                </div>
                                <div className="box__top">
                                    <div>
                                        <h5>Bussiness, Team</h5>
                                        <a href=''> Have No Time</a>
                                    </div> 
                                </div>
                                <div className="box__bottom">
                                    <div>
                                        <h5>Bussiness, Team</h5>
                                        <a href=''> Have No Time</a>
                                    </div> 
                                </div>
                                <div className="box__center">
                                    <div>
                                        <h5>Bussiness, Team</h5>
                                        <a href=''> Have No Time</a>
                                    </div> 
                                </div>
                            </div>
                            </div>
                            <div className='column display-two-768' >
                            <div className="box box4">
                            <div className="box__right">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> The Right Solution</a>
                                    </div> 
                                </div>
                                <div className="box__left">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> The Right Solution</a>
                                    </div>  
                                </div>
                                <div className="box__top">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> The Right Solution</a>
                                    </div> 
                                </div>
                                <div className="box__bottom">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> The Right Solution</a>
                                    </div> 
                                </div>
                                <div className="box__center">
                                    <div>
                                        <h5>Bussiness, Lawyer</h5>
                                        <a href=''> The Right Solution</a>
                                    </div> 
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    {/* 3rd */}
                    <br /><br />
                    <section className='sec-3'>
                        <div className='columns'>
                            <div className='column' >
                                <h3 className='heading'>Latest News</h3>

                                <div className='columns display-two-768'>
                                <abbr className="published post-date updated" title="March 23, 2014">
                                    <span className="cmsms_post_day">23</span>
                                    <span className="cmsms_post_month">Mar</span>
                                </abbr>

                                    <div className='column is-four-fifths' > <h3>Our Team Members</h3>
                                        <p> <spnan style={{ color: 'red' }} > cmsmmasters </spnan> comments (0)</p>
                                        <p style={{ color: 'rgb(156, 154, 154);' }} > We enjoy  the process of creating a theme from its start to its end – from a sparkling design idea, to the very release..</p>
                                    </div>
                                </div>
                                <div className='columns display-two-float'>
                                <abbr className="published post-date updated" title="March 23, 2014">
                                    <span className="cmsms_post_day">21</span>
                                    <span className="cmsms_post_month">Mar</span>
                                </abbr>

                                    <div className='column is-four-fifths' > <h3>How We Can Help You</h3>
                                        <p> <spnan style={{ color: 'red' }} > cmsmmasters </spnan> comments (0)</p>
                                        <p style={{ color: 'rgb(156, 154, 154);' }} >CMSMasters Studio is a team of professionals. Every member of our team has spent many hours polishing professional skills and earning a unique experience in the spheres of website design, wordpress development.</p>
                                    </div>
                                </div>

                            </div>
                            <div className='column ' >
                                <h3 className='heading'>Testinomials</h3>
                                <div className='coulmn testinomials' >
                                    Never expected to get such a powerful theme for this little money! It's a pleasure to work with, seems it just guesses my thoughts! I was looking for a really powerful corporate theme for my website, that would allow profound formatting and very Diverse content representation. Now I've found it!
                                </div>
                                <div>
                                <div className='author_wrap'>
                                <figure className='tl_author_img'>
                                <img width='45' height='45' src={person} className='attachment-testim-thumb size-testim-thumb wp-post-image' />                             </figure>
                                    <a target='_blank' href='' className='tl_author'>Jeff Blake</a>
                                    <p className='tl_company'>Company 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* part 2 */}
                        <br />
                    <section className='sec-4'>
                        <div>
                            <h3 className='heading'>Our Team</h3>
                            <div className='columns' >
                                <div className='column is-half-mobile' >
                                    <div className='card'>
                                        <div className='card-image'>
                                            <figure className='image is-4by3'>
                                                <img src={member} alt='Placeholder image' />
                                            </figure>
                                            <div className='cmsms_team_rollover'>
                                            <footer className='entry-meta'>
                                                <a href='' title='Twitter' target='_blank'>
                                                    <img src={twitter} alt='Twitter'/>
                                                </a>
                                                <a href='' title='Facebook' target='_blank'>
                                                    <img src={facebook} alt='Facebook'/>
                                                </a>
                                                <a href='' title='Vimeo' target='_blank'>
                                                    <img src={vimeo} alt='Vimeo'/>
                                                </a>
                                            </footer>
                                            </div>
                                        </div>
                                        <header className='entry-header'>
                                            <h5 className='person_title'>Jack Simmons</h5>
                                            <p className='person_subtitle'>Attorney</p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content has-text-centered	">
                                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris, Lorem ipsim tipsim jipsim</p>
                                                <a className="button sec-2-btn is-small">Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column is-half-mobile' >
                                    <div className='card'>
                                        <div className='card-image'>
                                            <figure className='image is-4by3'>
                                                <img src={member} alt='Placeholder image' />
                                            </figure>
                                            <div className='cmsms_team_rollover'>
                                            <footer className='entry-meta'>
                                                <a href='' title='Twitter' target='_blank'>
                                                    <img src={twitter} alt='Twitter'/>
                                                </a>
                                                <a href='' title='Facebook' target='_blank'>
                                                    <img src={facebook} alt='Facebook'/>
                                                </a>
                                                <a href='' title='Vimeo' target='_blank'>
                                                    <img src={vimeo} alt='Vimeo'/>
                                                </a>
                                            </footer>
                                            </div>
                                        </div>
                                        <header className='entry-header'>
                                            <h5 className='person_title'>Jack Simmons</h5>
                                            <p className='person_subtitle'>Attorney</p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content has-text-centered	">
                                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris, Lorem ipsim tipsim jipsim</p>
                                                <a className="button sec-2-btn is-small">Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column is-half-mobile' >
                                    <div className='card'>
                                        <div className='card-image'>
                                            <figure className='image is-4by3'>
                                                <img src={member} alt='Placeholder image' />
                                            </figure>
                                            <div className='cmsms_team_rollover'>
                                            <footer className='entry-meta'>
                                                <a href='' title='Twitter' target='_blank'>
                                                    <img src={twitter} alt='Twitter'/>
                                                </a>
                                                <a href='' title='Facebook' target='_blank'>
                                                    <img src={facebook} alt='Facebook'/>
                                                </a>
                                                <a href='' title='Vimeo' target='_blank'>
                                                    <img src={vimeo} alt='Vimeo'/>
                                                </a>
                                            </footer>
                                            </div>
                                        </div>
                                        <header className='entry-header'>
                                            <h5 className='person_title'>Jack Simmons</h5>
                                            <p className='person_subtitle'>Attorney</p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content has-text-centered	">
                                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris, Lorem ipsim tipsim jipsim</p>
                                                <a className="button sec-2-btn is-small">Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column is-half-mobile' >
                                    <div className='card'>
                                        <div className='card-image'>
                                            <figure className='image is-4by3'>
                                                <img src={member} alt='Placeholder image' />
                                            </figure>
                                            <div className='cmsms_team_rollover'>
                                            <footer className='entry-meta'>
                                                <a href='' title='Twitter' target='_blank'>
                                                    <img src={twitter} alt='Twitter'/>
                                                </a>
                                                <a href='' title='Facebook' target='_blank'>
                                                    <img src={facebook} alt='Facebook'/>
                                                </a>
                                                <a href='' title='Vimeo' target='_blank'>
                                                    <img src={vimeo} alt='Vimeo'/>
                                                </a>
                                            </footer>
                                            </div>
                                        </div>
                                        <header className='entry-header'>
                                            <h5 className='person_title'>Jack Simmons</h5>
                                            <p className='person_subtitle'>Attorney</p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content has-text-centered	">
                                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris, Lorem ipsim tipsim jipsim</p>
                                                <a className="button sec-2-btn is-small">Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                            {/* #3rd */}
                        
                            <div className='sec-5'>
                                <div className='columns' >
                                    <div className='column display-two-768' > <img src={logo1} /> </div>
                                    <div className='column display-two-768' > <img src={logo2} /> </div>
                                    <div className='column display-two-768' > <img src={logo3} /> </div>
                                    <div className='column display-two-768' > <img src={logo4} /> </div>
                                </div>
                            </div>
                </section>
         </main> 
          </div></div>
                );
            }
        }
        
        
        
export default Home