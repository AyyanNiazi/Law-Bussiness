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
import law from './image/law.jpg'
import './header.css';



class Home extends Component {

    render(props) {
        return (
            <div>
          <div>  
                <div class="csslider infinity" id="slider1">
                <input type="radio" name="slides" id="slides_1"/>
                <input type="radio" name="slides" checked="checked" id="slides_2"/>
                <input type="radio" name="slides" id="slides_3"/>
                <input type="radio" name="slides" id="slides_4"/>
                <input type="radio" name="slides" id="slides_5"/>
                <input type="radio" name="slides" id="slides_6"/>
                <ul>
                    <li>
                    <h1>Say hello to CSS3</h1>
                    <p>CSSlider is lightweight & easy to use slider. No JS - pure CSS.</p>
                    </li>
                    <li><img src={law}/>
                    </li>
                    <li>
                    <div id="bg">
                        <div>
                        <h1>CSS Events</h1>
                        <p>When slide 3 is reached - play CSS animation!</p>
                        </div>
                    </div>
                    </li>
                    <li class="scrollable">
                    <h1>Lots of text</h1>
                    <h2>Scrollable one</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada mi,
                        semper id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada mi,
                        semper id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada mi,
                        semper id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada mi,
                        semper id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada mi,
                        semper id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada mi,
                        semper id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.
                    </p>
                    </li>
                    <li>
                    <div id="center"> <a class="nice-link" href="https://github.com/drygiel/csslider" data-text="More examples on github" target="_blank">More examples on github</a></div>
                    </li>
                    <li>
                    <div id="center"><a class="play" id="dex-sign" href="http://drygiel.com" target="_blank"></a></div>
                    </li>
                </ul>
                <div class="arrows">
                    <label for="slides_1"></label>
                    <label for="slides_2"></label>
                    <label for="slides_3"></label>
                    <label for="slides_4"></label>
                    <label for="slides_5"></label>
                    <label for="slides_6"></label>
                    <label class="goto-first" for="slides_1"></label>
                    <label class="goto-last" for="slides_6"></label>
                </div>
            </div>

    </div>

            <div>
                <main class='container' >
                    <section class='sec-1' >
                        <div class='columns sec-1-first' >
                            <div class='column'><i class="fa fa-pen-fancy" style={{ color: '#EA2E0d'}} ></i>WYSIWYG Editor<br />
                                <p>A real-time WYSIWYG editor: you are able to customize the look of your website directly on page and see your changes right away!</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-book"  style={{ color: '#EA2E0d'}}></i> Solid Law Practic<br />
                                <p>Custom admin panel significantly extends original Wordpress functionality, turning it into an all-in-one tool for content management.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'> <span  ><i class="fa fa-briefcase" style={{ color: '#EA2E0d',font: '1.314em'}} ></i></span>  Special Design
                            <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-anchor" style={{ color: '#EA2E0d'}} ></i> Powerful Admin<br />
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
          </div></div>
                );
            }
        }
        
        
        
export default Home