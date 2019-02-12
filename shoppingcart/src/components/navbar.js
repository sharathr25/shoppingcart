import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse, Nav, Button} from 'reactstrap';
import { Modal, ModalHeader, ModalBody,Table } from 'reactstrap';
// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/products';
import CartProduct from './cartproduct';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      getCartProducts = () => {
        return this.props.cart.map((product,index) => {
            return <CartProduct key={index} product={product} index={index}/>
        });
      }

      render() {
        const cartProducts = this.getCartProducts();
        let cart = <p>Cart Empty</p>
        if(cartProducts.length !== 0){
          cart = <React.Fragment><Table borderless>
                  <tbody>
                    {cartProducts}
                  </tbody>
                 </Table>
                <Link to="/checkout"><Button>check Out</Button></Link>
                </React.Fragment>
        }
        return (
          <div>
            <Navbar color="light" light expand="md" id="navbar">
              <NavbarBrand href="/">Shopper</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button outline color="success" onClick={this.toggle}>cart</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>CART</ModalHeader>
                    <ModalBody>
                        {cart}
                    </ModalBody>
                    </Modal>
                    </NavItem>
                    </Nav>
                    </Collapse>
                    </Navbar>
          </div>
        );
      }
    }

function mapStateToProps(state) {
    return {
      cart: state.cart
    };
  }
  
  function matchDispachToProps(dispach) {
    return bindActionCreators({addToCart: addToCart},dispach);
  }
  
  export default connect(mapStateToProps, matchDispachToProps)(NavBar);
