import React,{Component} from 'react';
import Map from './map';
import './main.css';



class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latest: true,
            popular: false,
            comments: false,
        }
    }

    latest = () => {
        this.setState({
            latest: true
        })
    }
    popular = () => {
        this.setState({
            popular: true,
            latest: false,
            comments: false
        })
        console.log("popular")
    }
    comments = () => {
        this.setState({
            comments: true,
            latest: false,
            popular: false
        })
        console.log("comments")
    }

    render(props) {
        const { classes } = this.props;
        return (
            <main>
                <div class='columns upper' >
                    <div class='column is-four-fifths' > <h1>Contacts</h1></div>
                    <div class='column' > <h6> <span style={{ color: 'red' }} >Home</span> > Contacts</h6> </div>
                </div>

                <br /><br />

                <section class='container' >
                    <div class='columns' >
                        <div class='column is-four-fifhts' > <div style={{width: '666', height: '374'}} ><Map /></div>  <br />

                            <form>
                                <div class="field">
                                    <label class="label">Name <span style={{ color: 'red' }} >*</span> </label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Email  <span style={{ color: 'red' }} >*</span></label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Website  <span style={{ color: 'red' }} >*</span></label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Subject  <span style={{ color: 'red' }} >*</span></label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Text input" />
                                    </div>
                                </div>



                                <div class="field">
                                    <label class="label">Message <span style={{ color: 'red' }} >*</span></label>
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Textarea" rows="10" ></textarea>
                                    </div>
                                </div>


                                <div class="field is-grouped">
                                    <div class="control">
                                        <button class="button is-link">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div class='column' >
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success" type="text" placeholder="Enter Keyword" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>

                            </div>

                            <div class='recent-post' >
                                <h3>Recent Posts </h3>

                                ><a>  Our Team Members</a><hr />
                                ><a>  How We Can Help You</a><hr />
                                ><a>  Standard Post With an Image </a><hr />
                                ><a>  Standard Post Without Image</a><hr />
                                ><a>  Video post format</a><br /> <br /> <hr />
                            </div>

                            <div>
                                <h2>Testinomials</h2>
                                <br />
                                <div class='box' >
                                    <p>Never expected to get such a powerfull theme for this little! Its a pleasure to work with, seems it...</p>

                                </div>
                                <p style={{ color: 'red' }} >Author 2  </p>
                                <h6>Newman Ltd.</h6>
                                <hr />

                                <div>
                                    <h2>Post Tabs</h2>

                                    <div class='state-box' >
                                        <div class='columns' >
                                            <div class='column' > <button onClick={this.latest.bind(this)} >Latest</button> </div>
                                            <div class='column' > <button onClick={this.popular} >Popular</button> </div>
                                            <div class='column' > <button onClick={this.comments} >Comments</button> </div>
                                        </div>

                                        {this.state.latest === true ?
                                            <div style={{padding: '20px'}} >
                                            <div class='columns' >
                                                <div class='column' >
                                                    img
                                                               </div>
                                                <div class='column  is-fourth-fifths' >
                                                    <p style={{ color: '#ea2e0d' }} >Our Team Member</p>
                                                    <small>March 23, 2014</small>
                                                </div>
                                            </div>

                                            <div class='columns' >
                                                <div class='column' >
                                                    img
                                            </div>
                                                <div class='column  is-fourth-fifths' >
                                                    <p style={{ color: '#ea2e0d' }} >How we can help you</p>
                                                    <small>March 23, 2014</small>
                                                </div>
                                            </div>

                                            <div class='columns' >
                                                <div class='column' >
                                                    img
                                                               </div>
                                                <div class='column  is-fourth-fifths' >
                                                    <p style={{ color: '#ea2e0d' }} >Standard Post with an image</p>
                                                    <small>March 23, 2014</small>
                                                </div>
                                                </div>
                                            </div> 
                                            :

                                            this.state.popular === true ? 

                                            <div  style={{padding: '20px'}}>
                                                 <div class='columns' >
                                                <div class='column' >
                                                    img
                                                               </div>
                                                <div class='column  is-fourth-fifths' >
                                                    <p  > WordPress themes we create possess a special merit for both…</p>
                                                    <small>March 23, 2014</small>
                                                </div>
                                            </div>

                                            <div class='columns' >
                                                <div class='column' >
                                                    img
                                            </div>
                                                <div class='column  is-fourth-fifths' >
                                                    <p  >Content management tools have never been more powerful and functional,…</p>
                                                    <small>March 23, 2014</small>
                                                </div>
                                            </div>

                                            <div class='columns' >
                                                <div class='column' >
                                                    img
                                                               </div>
                                                <div class='column  is-fourth-fifths' >
                                                    <p  style={{ color: '#ea2e0d' }} >Standard Post with an image</p>
                                                    <small>March 23, 2014</small>
                                                </div>
                                                </div>

                                            </div> 
                                            :

                                            this.state.comments === true ?
                                            <div style={{padding: '20px'}} >
                                                 <div class='columns' >
                                                 <div class='column'>
                                                     <small>
                                                    P.S on Standard Post With an Image
                                                    November 14, 2012
                                                    Thats great!
                                                    </small>
                                                 </div>
                                                   
                                                </div>

                                                <div class='columns' >
                                                <div class='column'>
                                                    <small>
                                                    backdoor on Video post format
                                                    November 14, 2012
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque...!
                                                    </small>
                                                </div>
                                                </div>

                                                <div class='columns' >
                                                <div class='column'>
                                                    <small>
                                                    Jack on Gallery Post Format
                                                    November 14, 2012
                                                    Great theme, love it!
                                                    </small>
                                                </div>
                                                </div>
                                            </div> 

                                            : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}



export default Contact