import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import './main.css';

class Footer extends Component {


    render(props) {
        const { classes } = this.props;
        return (
            <footer class='footer' >
                <div class='columns' >
                    <div class='column display-two-768' >
                        <h2>
                            <a class="footer-logo logo"  >
                                <i class="fa fa-balance-scale"></i> Law Bussiness
                            </a>
                        </h2><br />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <br />

                        <div class='columns contactdetails' >
                            <div class='column' > <i class="fa fa-map-marker"></i> </div>

                            <div class='column is-four-fifths' >
                                <p>Cmsmasters Studio<br /> 51, North Ave<br /> New York NY<br />  10001</p>
                            </div>
                        </div>
                        <div class='columns contactdetails' >
                            <div class='column' > <i class="fa fa-phone"></i> </div>

                            <div class='column is-four-fifths' >
                                <p>(978) 373 45 22</p>
                            </div>
                        </div>
                        <div class='columns contactdetails' >
                            <div class='column' > <i class="fa fa-envelope"></i> </div>

                            <div class='column is-four-fifths' >
                                <p>copyright@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class='column display-two-768' >
                        <h4 class='widget-heading'>Recent Posts</h4><hr />
                        <ul>
                            <li>
                                <a href='' title="Our Team Members">Our Team Members</a>
                            </li>
                            <li>
                                <a href='' title="How We Can Help You">How We Can Help You</a>
                            </li>
                            <li>
                                <a href='' title="Standard Post With an Image">Standard Post With an Image</a>
                            </li>
                            <li>
                                <a href='' title="Standard Post Without Image">Standard Post Without Image</a>
                            </li>
                            <li>
                                <a href='' title="Video post format">Video post format</a>
                            </li>
                            <li>
                                <a href='' title="Gallery Post Format">Gallery Post Format</a>
                            </li>
                            <li>
                                <a href='' title="Quote post format">Quote post format</a>
                            </li>
                            <li>
                                <a href='' title="Audio Post Format">Audio Post Format</a>
                            </li>
                        </ul>

                    </div>
                    <div class='column display-two-768' >
                        <h4 class='widget-heading'>Attorneys</h4> <hr />
                        <ul>
                            <li><a href=''>Jack Simmons</a></li>
                            <li><a href=''>Karen Dawson</a></li>
                            <li><a href=''>Michael Linden</a></li>
                            <li><a href=''>Helga Stevens</a></li>
                            <li><a href=''>Mark  Thompson</a></li>
                            <li><a href=''>Frank Turner</a></li>
                            <li><a href=''>Scott Travis</a></li>
                            <li><a href=''>Maria Lebovski</a></li>
                        </ul>
                    </div>
                    <div class='column contactform display-two-float' >
                        <h4 class='widget-heading'>Contact Form </h4> <hr />

                        <div class="field">
                            <div class="control">
                                <label class="email">Your Email</label>
                                <input class="input" id="email" type="text" placeholder="Medium input" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label class="subject">Message Subject</label>
                                <input class="input" id="subject" type="text" placeholder="Medium input" />
                            </div>
                        </div>

                        <label class="mesage">Message </label>

                        <textarea class="textarea" id="mesage" placeholder="e.g. Hello world"></textarea>
                        <button class='button' >Send Mesage</button><br /><br />
                    </div>
                </div>
                <div class='container hideme'>
                    <div class='columns'>
                    <span class="copyright">This is a sample website - cmsmasters © 2019 / All Rights Reserved</span>
                    </div>
                </div>
                <div class='container'>
                <div class='columns copyright'>
                    <div class='column hidden-res'>
                        <span class="copyright">This is a sample website - cmsmasters © 2019 / All Rights Reserved</span>
                    </div>
                    <div class='column social has-text-right display-block-text-center'>
                        <a href=''  class='fa fa-facebook'></a>
                        <a href=''  class='fa fa-twitter'></a>
                        <a href=''  class='fa fa-rss'></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                        <a href="#" class="fa fa-dribbble"></a>
                        <a href="#" class="fa fa-flickr"></a>
                    </div>
                </div> 
                </div>
            </footer>
        );
    }
}



export default Footer