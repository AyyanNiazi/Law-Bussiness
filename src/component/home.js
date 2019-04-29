import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import l1 from './image/l1.jpeg'
import l2 from './image/l2.jpeg'
import l3 from './image/l3.jpeg'
import l4 from './image/l4.jpeg'
import logo1 from './image/logo1.png'
import logo2 from './image/logo2.png'
import logo3 from './image/logo3.png'
import logo4 from './image/logo4.png'
import './header.css';



class Home extends Component {

    render(props) {
        return (
            <div>
                <main class='container' >
                    <section class='sec-1' >
                        <div class='columns sec-1-first' >
                            <div class='column'><i class="fa fa-pen-fancy"></i>WYSIWYG Editor<br />
                                <p>A real-time WYSIWYG editor: you are able to customize the look of your website directly on page and see your changes right away!</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-book"></i> Solid Law Practic<br />
                                <p>Custom admin panel significantly extends original Wordpress functionality, turning it into an all-in-one tool for content management.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-briefcase"></i> Special Design
                            <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-anchor"></i> Powerful Admin<br />
                                <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                        </div>
                    </section>

                    {/* 2nd section */}

                    <section class='sec-2'  >
                        <div>
                            <h4>Solid law practise</h4>
                        </div>

                        <div class="columns">
                            <div class="column is-four-fifths" >
                                <h1>All people are equal before the law. A good attorney is what makes a difference.</h1>
                            </div>
                            <div class="column">
                                <a class="button sec-2-btn is-large">Download</a>
                            </div>
                        </div>

                        {/* 2nd part */}
                        <div class='columns' >
                            <div class='column' >
                                <img src={l1} />
                            </div>
                            <div class='column' >
                                <img src={l2} />

                            </div>
                            <div class='column' >
                                <img src={l3} />

                            </div>
                            <div class='column' >
                                <img src={l4} />

                            </div>
                        </div>
                    </section>

                    {/* 3rd */}
                    <br /><br />
                    <section>
                        <div class='columns'>
                            <div class='column' >
                                <h3>Latest News</h3>

                                <div class='columns'>
                                    <div class='column' > 23 March </div>

                                    <div class='column is-four-fifths' > <h3>Our Team Members</h3>
                                        <p> <spnan style={{ color: 'red' }} > cmsmmasters </spnan> comments (0)</p>
                                        <br /><br />
                                        <p style={{ color: 'rgb(156, 154, 154);' }} > We enjoy  the process of creating a theme from its start to its end – from a sparkling design idea, to the very release..</p>
                                    </div>
                                </div>
                                <div class='columns'>
                                    <div class='column' > 21 March </div>

                                    <div class='column is-four-fifths' > <h3>How We Can Help You</h3>
                                        <p> <spnan style={{ color: 'red' }} > cmsmmasters </spnan> comments (0)</p>
                                        <br /><br />
                                        <p style={{ color: 'rgb(156, 154, 154);' }} >CMSMasters Studio is a team of professionals. Every member of our team has spent many hours polishing professional skills and earning a unique experience in the spheres of website design, wordpress development.</p>
                                    </div>
                                </div>

                            </div>
                            <div class='column' >
                                <h3>Testinomials</h3>
                                <br />
                                <div class='coulmns testinomials' >
                                    <p >Never expected to get such a powerful theme for this little money! It's a pleasure to work with, seems it just guesses my thoughts! I was looking for a really powerful corporate theme for my website, that would allow profound formatting and very Diverse content representation. Now I've found it!</p>
                                </div>

                                <div>
                                    <h5>Jeff Blake</h5>
                                    <h6>Company 2</h6>
                                </div>
                            </div>
                        </div>

                        {/* part 2 */}
                        <br />
                        <div>
                            <h3>Our Team</h3>

                            <div class='columns' >
                                <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l1} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='column' >
                                    <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l2} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class='column' >
                                    <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l3} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class='column' >
                                    <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l4} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>

                            {/* #3rd */}

                            <div>
                                <div class='columns' >
                                    <div class='column' > <img src={logo1} /> </div>
                                    <div class='column' > <img src={logo2} /> </div>
                                    <div class='column' > <img src={logo3} /> </div>
                                    <div class='column' > <img src={logo4} /> </div>
                                </div>
                            </div>
                </section>
         </main> 
          </div>
                );
            }
        }
        
        
        
export default Home