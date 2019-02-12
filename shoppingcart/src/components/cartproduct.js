import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { addToCart,removeFromCart, updateCart,updateProduct,removeProduct } from '../actions/products';
import { Table, Button } from 'reactstrap';

class CartProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            left : this.props.product.quantity
        }
    }

  removeFromCart = () => {
    const product = this.props.product;
    product.selected = 0;
    this.props.removeFromCart(this.props.product);
    this.props.removeProduct(product);
    this.props.updateProduct(product);
  }
  
  updateCartItems = () => {
    const product = this.props.product;
    product.selected = product.selected-1;
    this.props.updateCart(product);
    this.props.removeProduct(product);
    this.props.updateProduct(product);
  }

  render() {
      let button = <Button outline color="danger" size="sm" onClick={this.removeFromCart}>remove</Button>
      if(this.props.product.selected > 1){
        button = <Button outline color="danger" size="sm" onClick={this.updateCartItems}>-</Button>
      }
    return (
        <tr key={this.props.index} className="cart-product">
        <td><img src={this.props.product.imgurl} alt="product"/></td>
        <td>
            <Table>
                <tbody>
                    <tr key="1">
                        <td><strong>Name</strong></td>
                        <td>{this.props.product.name}</td>
                    </tr>
                    <tr key="2">
                        <td><strong>Price</strong></td>
                        <td>&#8377; {this.props.product.price}</td>
                    </tr>
                    <tr key="3">
                        <td><strong>Quantity</strong></td>
                        <td>{this.props.product.selected}x  {button}</td>
                    </tr>
                    <tr key="4">
                        <td><strong>Total Price</strong></td>
                        <td>&#8377; {this.props.product.selected * this.props.product.price}</td>
                    </tr>
                </tbody>
            </Table></td>
        </tr>
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
        removeFromCart:removeFromCart,
        updateCart: updateCart,
        updateProduct:updateProduct,
        removeProduct:removeProduct},dispach);
  }
  
  export default connect(mapStateToProps, matchDispachToProps)(CartProduct);
