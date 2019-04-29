import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



class About extends Component {
    constructor(props) {
        super(props);
    
       
        
    }

  

  
    render(props) { 
        const { classes } = this.props;
        return ( 
          <div>
              About
          </div>
        );
    }
}



export default About