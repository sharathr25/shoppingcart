import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Col, Table, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import { addToCart,updateCart, updateProduct} from '../actions/products';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            left : this.props.product.quantity-(this.props.product.selected || 0)
        }
    }
    handleCart = () => {
        const product = this.props.product;
        const productInCart = this.props.cart.filter((product) => {
            return product.id === this.props.product.id;
        });
        if(productInCart.length !== 0){
            product.selected = productInCart[0].selected+1;
            this.props.updateCart(product);
        } else {
            product.selected = 1;
            this.props.addToCart(product);
        }
        if(product.selected > product.quantity){
            toast.error('Product can\'t be Added.OUT OF STOCK', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
                return;
        }
        if(product.selected === product.quantity){
            this.setState({left: 'out of stock'});
        }
        else {
            this.setState({left: this.state.left-1 });
        }
        toast.success('Product added to Cart', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
    }

  render() {
      let productsLeft = <span id="in-stock">In Stock {this.props.product.quantity-(this.props.product.selected || 0)}</span>
      let button = <Button outline color="primary" onClick={this.handleCart}>ADD TO CART</Button>;
      if(this.props.product.selected === this.props.product.quantity){
        productsLeft = <span id="out-of-stock">Out Of Stock</span>
        button = null;
      }
    return (
        <React.Fragment>
        <Col><img src={this.props.product.imgurl} alt="product"/></Col>
        <Col><Table borderless>
        <tbody>
        <tr>
            <td><strong>ID</strong></td>
            <td>{this.props.product.id}</td>
        </tr>
        <tr>
            <td><strong>NAME</strong></td>
            <td>{this.props.product.name}</td>
        </tr>
        <tr>
            <td><strong>PRICE</strong></td>
            <td>&#8377; {this.props.product.price}</td>
        </tr>
        <tr>
            <td><strong>LEFT</strong></td>
            <td>{productsLeft}</td>
        </tr>
        <tr>
            <td>{button}</td>
        </tr>
        </tbody>
        </Table>
        </Col>
        </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {
      products: state.products,
      cart: state.cart
    };
  }
  
  function matchDispachToProps(dispach) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart,
        updateProduct:updateProduct},dispach);
  }
  
  export default connect(mapStateToProps, matchDispachToProps)(Product);
