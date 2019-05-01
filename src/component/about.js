import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ab1 from './image/ab1.png';
import ab2 from './image/ab2.png';
import ab3 from './image/ab3.png';
import './about.css'


class About extends Component {
  
    render(props) { 
        const { classes } = this.props;
        return ( 
          <div>
              <section class='container' >
                <div style={{textAlign: 'center', }} >
                <h1 style={{fontSize: '2.149em', color: '#EA2E0d'}} >Our Firm </h1>
                <h5 style={{fontSize: '1.289em'}}> Building on four decades of experience</h5>
                </div>

                <div class='columns sec-1' style={{textAlign: 'center'}}  >
                    <div class='column' >
                        <img src={ab1} />
                        <h1>Established in 2019</h1>
                        <br/>
                        <p>Over 40 years of working experience in the field of Intellectual Property, Corporate and Commercial Law.</p>
                    </div>
                    <div class='column' >
                        <img src={ab2} />
                        <h1>Global Presence</h1>
                        <br/>
                        <p>With associates around the globe, we can provide you unparalleled services..</p>
                    </div>
                    <div class='column' >
                     <img src={ab3} />
                     <h1>240+</h1>
                        <br/>
                        <p>Number of Lawyers and professionals working for Ali & Associates.</p>
                    </div>
                </div>

                <div>
                    <p>We are an internationally recognized full-service Pakistani law firm covering commercial, corporate, civil, labor and banking laws. The firm has particular specialization in the areas of Intellectual Property, Media, Telecom and Internet laws. <br/><br/>

The firm's IP practice has received international commendation and is recognized as a top tier firm in the sector. The firm represents some of the most prominent companies in the world and assists them in protecting invaluable IP assets. We provide a wide range of services in the IP arena, starting with due diligence including Market Surveys, IP Searches, etc, and continuing forth to the registration of trademarks, patents, designs and copyrights and finally to the enforcement of rights through litigation and search and seizure operations.<br/><br/>

The firm is also highly regarded for its Litigation practice and has represented a large number of clients, including some of the biggest national and international corporations, in landmark cases before the High Courts and Supreme Court of Pakistan.<br/><br/>

At Ali & Associates, we value long-term client relationships. Since our founding in 1972, Ali & Associates has served businesses and individuals for more than four decades and we strongly believe in forging long-term partnerships with clients, which allows us to formulate comprehensive and innovative strategies designed as per each client's requirement. <br/>

</p>
                </div>
              </section>
          </div>
        );
    }
}



export default About