import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'


class Footer extends Component {


    render(props) {
        const { classes } = this.props;
        return (
            <footer class='footer' >
                <div class='columns' >
                    <div class='column' >
                        <h2>Law Bussiness </h2><br /><br />


                        <div class='columns' >
                            <div class='column' > <i class="fa fa-map-marker-check"></i> </div>

                            <div class='column is-four-fifths' >
                                <p>Cmsmasters Studio 51, North Ave New York NY  10001</p>
                            </div>
                        </div>
                        <div class='columns' >
                            <div class='column' > <i class="fa fa-mobile"></i> </div>

                            <div class='column is-four-fifths' >
                                <p>(978) 373 45 22</p>
                            </div>
                        </div>
                        <div class='columns' >
                            <div class='column' > <i class="fa fa-letter"></i> </div>

                            <div class='column is-four-fifths' >
                                <p>(978) 373 45 22</p>
                            </div>
                        </div>
                    </div>
                    <div class='column' >
                        <h4>Recent Posts</h4><hr />

                        <li> > Our Team Members   </li>
                        <li> > How We Can Help You  </li>
                        <li> > Standard Post With an Image   </li>
                        <li> > Standard Post Without Image   </li>
                        <li> > Video post format   </li>
                        <li> > Gallery Post Format   </li>
                        <li> > Quote post format  </li>
                        <li> >  Audio Post Format </li>

                    </div>
                    <div class='column' >
                        <h4>Attorneys</h4> <hr />

                        <li type='none  '> > Jack Simmons </li>
                        <li> > Jack Simmons </li>
                        <li> > Jack Simmons </li>
                        <li> > Karen Dawson  </li>
                        <li> > Karen Dawson </li>
                        <li> > Karen Dawson </li>
                        <li> > Karen Dawson </li>
                        <li> > Karen Dawson </li>

                    </div>
                    <div class='column' >
                        <h4>Contact Form </h4> <br />

                        <div class="field">
                            <div class="control">
                            <label class="email">Your Email</label>
                                <input class="input" id="email" type="text" placeholder="Medium input"/>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <label class="subject">Message Subject</label>
                                <input class="input" id="subject"  type="text" placeholder="Medium input"/>
                            </div>
                        </div>

                        <label class="mesage">Message </label>

                        <textarea class="textarea" id="mesage" placeholder="e.g. Hello world"></textarea>
                        <button class='button' >Send Mesage</button><br/><br/>
                    </div>
                </div>
            </footer>
                    );
                }
            }
            
            
            
export default Footer