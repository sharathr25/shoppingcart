import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
// import { toast } from 'react-toastify';
import { Table,Container,Row,Col,Button} from 'reactstrap';
import { addToCart,updateProducts } from '../actions/products';
import { Link } from 'react-router-dom'

class CheckOut extends Component {
  constructor(){
    super();
    this.state = {
      bought: false
    }
  }
      handleBuy = () => {
        this.props.updateProducts(this.props.cart);
        this.setState({ bought: true });
      }

      getCartProducts = () => {
        return this.props.cart.map((product,index) => {
            return <Row key={index} id="product">
                    <Col><img src={product.imgurl} alt="product"/></Col>
                    <Col>
                      <Table>
                        <tbody>
                          <tr key={index+'1'}><td>Name</td><td>{product.name}</td></tr>
                          <tr key={index+'2'}><td>Quantity</td><td>{product.selected} x</td></tr>
                          <tr key={index+'3'}><td>Price</td><td>{product.price}</td></tr>
                          <tr key={index+'4'}><td>Total</td><td>{product.selected * product.price}</td></tr>
                        </tbody>
                      </Table>
                    </Col>
                   </Row>
        });
      }

      getTotal = () => {
        let total = 0;
        for(let i=0;i<this.props.cart.length;i++){
          total += this.props.cart[i].price*this.props.cart[i].selected;
        }
        return total;
      }

      render() {
        const productsInJsx = this.getCartProducts();
        let total = null;
        if(this.props.cart.length !== 0){
          const totalPrice = this.getTotal();
          total = <Row>
                <Col>
                  <p><strong>
                    Grand Total = &#8377; {totalPrice}
                  </strong></p>
                  <Button outline color="primary" onClick={this.handleBuy}>BUY</Button>
                </Col>
              </Row>
        } 
        if(this.state.bought === false){
          return (
            <div>
              <h1>CHECK OUT</h1>
               <Container>
                 {productsInJsx}
                 {total}
               </Container>
             </div>
           );
        } else {
          return <div>
          <h1>CHECK OUT</h1>
           <Container>
            <p>Product will be deliverd in few days</p>
            <p>Click below button to continue shopping</p>
            <p><Link to="/shopping"><Button outline color="primary">Products</Button></Link></p>
           </Container>
         </div>
        } 
      }
    }

function mapStateToProps(state) {
    return {
      cart: state.cart
    };
  }
  
  function matchDispachToProps(dispach) {
    return bindActionCreators({
      addToCart: addToCart,
      updateProducts: updateProducts},dispach);
  }
  
  export default connect(mapStateToProps, matchDispachToProps)(CheckOut);
