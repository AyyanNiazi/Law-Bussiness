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



class Contact extends Component {
    constructor(props) {
        super(props);
    
       
        
    }

  

  
    render(props) { 
        const { classes } = this.props;
        return ( 
          <div>
              Contact
          </div>
        );
    }
}



export default Contact