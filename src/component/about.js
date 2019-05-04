import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ab1 from './image/ab1.png';
import ab2 from './image/ab2.png';
import ab3 from './image/ab3.png';
import ab4 from './image/ab4.png';
import ab5 from './image/ab5.png';
import bannerabout from './image/bannerabout.jpeg';
import './about.css';
import './main.css';


class About extends Component {

    render(props) {
        const { classes } = this.props;
        return (
            <div>
                <img src={bannerabout} class='aboutbanner' />
    
            <div class='container' >

                <section >
                    <div style={{ textAlign: 'center', }} >
                        <h1 style={{ fontSize: '2.149em', color: '#EA2E0d' }} >About us</h1>
                        <h5 style={{ fontSize: '1.289em' }}> Short description about our long experience</h5>
                    </div>

                    <div class='columns sec-1' style={{ textAlign: 'center' }}  >
                        <div class='column box ' id='show-three' >
                            <img src={ab1} />
                            <h1>Established in 2019</h1>
     
                            <p>Over 40 years of working experience in the field of Intellectual Property.</p>
                        </div>
                        <div class='column box ' id='show-three'>
                            <img src={ab2} />
                            <h1>Global Presence</h1>
           
                            <p>With associates around the globe, we can provide you unparalleled services..</p>
                        </div>
                        <div class='column box ' id='show-three'>
                            <img src={ab3} />
                            <h1>240+</h1>
                
                            <p>Number of Lawyers and professionals working for Ali & Associates.</p>
                        </div>
                    </div>

                    <div>
                    <div style={{ textAlign: 'center', }} >
                        <h1 style={{ fontSize: '2.149em', color: '#EA2E0d' }} >Our Firm </h1>
                        <h5 style={{ fontSize: '1.289em' }}> Building on four decades of experience</h5>
                        <br/>
                    </div>
                        <p>We are an internationally recognized full-service Eurpioni law firm covering commercial, corporate, civil, labor and banking laws. The firm has particular specialization in the areas of Intellectual Property, Media, Telecom and Internet laws. </p>

                            <p>The firm's IP practice has received international commendation and is recognized as a top tier firm in the sector. The firm represents some of the most prominent companies in the world and assists them in protecting invaluable IP assets. We provide a wide range of services in the IP arena, starting with due diligence including Market Surveys, IP Searches, etc, and continuing forth to the registration of trademarks, patents, designs and copyrights and finally to the enforcement of rights through litigation and search and seizure operations.</p>

                            <p>At Ali & Associates, we value long-term client relationships. Since our founding in 1972, Ali & Associates has served businesses and individuals for more than four decades and we strongly believe in forging long-term partnerships with clients, which allows us to formulate comprehensive and innovative strategies designed as per each client's requirement. </p>
                        
                    </div>
                </section>

                <br/>
                <section >
                    <div style={{ textAlign: 'center' }} >
                        <h1 style={{ fontSize: '2.149em', color: '#EA2E0d' }} >Our Approach </h1>
                        <h5 style={{ fontSize: '1.289em' }}> The firm is guided by certain core principles: professionalism, integrity,<br/> hard-work and pragmatism.</h5>
                        <br/>
                        <span>Ali & Associates is widely recognized for the depth of its knowledge resulting from its decades’ long experience. The firm’s clients acknowledge our ability to identify and resolve key quickly and effectively, even in the most difficult circumstances. We strive to provide comprehensive legal services to safeguard commercial asset and enforce proprietary rights by creating a synergy between law and industrial knowledge.</span>
                    </div>

                    <div class='columns sec-35' >
                        <div class='column box' >
                        <div class='columns'>
                            <div class='column' > <img src={ab4} />

                             </div>
                            <div class='column is-three-quarters' >
                            <h5 style={{color: '#EA2E0d'}} >Bussiness Advisers</h5>
                   
                                <span>Business Advisers
                            The firm’s rely on the firm to provide them with honest opinions on key business issues and view Ali & Associates as important partners in sustaining competitive advantage in the global market. The firm routinely advises clients on issues such as expansion of business through integration and diversification, product development and launch, branding and commercial exploitation, conflict of interest and competition matters.</span>
                            </div>
                            </div>
                        </div>

                        <div class='column box ' >
                        <div class='columns'>
                            <div class='column' > <img src={ab5} />
                               
                             </div>
                            <div class='column is-three-quarters' >
                            <h5 style={{color: '#EA2E0d'}} >Bussiness Advisers</h5>
                            
                                <h5>Business Advisers
                            The firm’s rely on the firm to provide them with honest opinions on key business issues and view Ali & Associates as important partners in sustaining competitive advantage in the global market. The firm routinely advises clients on issues such as expansion of business through integration and diversification, product development and launch, branding and commercial exploitation, conflict of interest and competition matters.</h5>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
            </div>
            </div>
        );
    }
}



export default About