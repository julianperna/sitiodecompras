import React from 'react';
import{NavItem,Nav,NavbarBrand,Navbar} from 'reactstrap';
import Carro from './Carro'

class Navegacion extends React.Component{
  render(){
    return (
      <Navbar color="light" light expand="mr">
        <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Carro />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Navegacion