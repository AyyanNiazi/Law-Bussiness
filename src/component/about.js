import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ab1 from './image/ab1.png';
import ab2 from './image/ab2.png';
import ab3 from './image/ab3.png';
import ab4 from './image/ab4.png';
import ab5 from './image/ab5.png';
import './about.css'


class About extends Component {

    render(props) {
        const { classes } = this.props;
        return (
            <div class='container' >
                <section >
                    <div style={{ textAlign: 'center', }} >
                        <h1 style={{ fontSize: '2.149em', color: '#EA2E0d' }} >Our Firm </h1>
                        <h5 style={{ fontSize: '1.289em' }}> Building on four decades of experience</h5>
                    </div>

                    <div class='columns sec-1' style={{ textAlign: 'center' }}  >
                        <div class='column' >
                            <img src={ab1} />
                            <h1>Established in 2019</h1>
                            <br />
                            <p>Over 40 years of working experience in the field of Intellectual Property, Corporate and Commercial Law.</p>
                        </div>
                        <div class='column' >
                            <img src={ab2} />
                            <h1>Global Presence</h1>
                            <br />
                            <p>With associates around the globe, we can provide you unparalleled services..</p>
                        </div>
                        <div class='column' >
                            <img src={ab3} />
                            <h1>240+</h1>
                            <br />
                            <p>Number of Lawyers and professionals working for Ali & Associates.</p>
                        </div>
                    </div>

                    <div>
                        <p>We are an internationally recognized full-service Pakistani law firm covering commercial, corporate, civil, labor and banking laws. The firm has particular specialization in the areas of Intellectual Property, Media, Telecom and Internet laws. <br /><br />

                            The firm's IP practice has received international commendation and is recognized as a top tier firm in the sector. The firm represents some of the most prominent companies in the world and assists them in protecting invaluable IP assets. We provide a wide range of services in the IP arena, starting with due diligence including Market Surveys, IP Searches, etc, and continuing forth to the registration of trademarks, patents, designs and copyrights and finally to the enforcement of rights through litigation and search and seizure operations.<br /><br />

                            The firm is also highly regarded for its Litigation practice and has represented a large number of clients, including some of the biggest national and international corporations, in landmark cases before the High Courts and Supreme Court of Pakistan.<br /><br />

                            At Ali & Associates, we value long-term client relationships. Since our founding in 1972, Ali & Associates has served businesses and individuals for more than four decades and we strongly believe in forging long-term partnerships with clients, which allows us to formulate comprehensive and innovative strategies designed as per each client's requirement. <br />

                        </p>
                    </div>
                </section>

                <br/>
                <section >
                    <div style={{ textAlign: 'center' }} >
                        <h1 style={{ fontSize: '2.149em', color: '#EA2E0d' }} >Our Approach </h1>
                        <h5 style={{ fontSize: '1.289em' }}> The firm is guided by certain core principles: professionalism, integrity,<br/> hard-work and pragmatism.</h5>
                        <br/>
                        <h6>Ali & Associates is widely recognized for the depth of its knowledge resulting from its decades’ long experience. The firm’s clients acknowledge our ability to identify and resolve key quickly and effectively, even in the most difficult circumstances. We strive to provide comprehensive legal services to safeguard commercial asset and enforce proprietary rights by creating a synergy between law and industrial knowledge.</h6>
                    </div>

                    <div class='columns' >
                        <div class='column box' >
                            <div class='column' > <img src={ab4} />

                             </div>
                            <div class='column is-three-quarters' >
                            <h5 style={{color: '#EA2E0d'}} >Bussiness Advisers</h5>
                                    <br/>
                                <h5>Business Advisers
                            The firm’s rely on the firm to provide them with honest opinions on key business issues and view Ali & Associates as important partners in sustaining competitive advantage in the global market. The firm routinely advises clients on issues such as expansion of business through integration and diversification, product development and launch, branding and commercial exploitation, conflict of interest and competition matters.</h5>
                            </div>
                        </div>

                        <div class='column box' >
                            <div class='column' > <img src={ab5} />
                               
                             </div>
                            <div class='column is-three-quarters' >
                            <h5 style={{color: '#EA2E0d'}} >Bussiness Advisers</h5>
                                    <br/>
                                <h5>Business Advisers
                            The firm’s rely on the firm to provide them with honest opinions on key business issues and view Ali & Associates as important partners in sustaining competitive advantage in the global market. The firm routinely advises clients on issues such as expansion of business through integration and diversification, product development and launch, branding and commercial exploitation, conflict of interest and competition matters.</h5>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
            </div>
        );
    }
}



export default About