import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Container, Row } from 'reactstrap';
import Product from '../components/product';
import { getProducts } from '../actions/products';

class Products extends Component {
    componentDidMount(){
        this.props.getProducts();
    }
    getProductsInJsx = () => {
        return this.props.products.map((product,index) => {
        return <Row key={index} id="row">
                <Product product={product} />
                </Row>
    });
}
  render() {
    const productsInJsx = this.getProductsInJsx();
    return (
    <Container id="products">
        {productsInJsx}
    </Container>
    );
  }
}

function mapStateToProps(state) {
    return {
      products: state.products,
    };
  }
  
  function matchDispachToProps(dispach) {
    return bindActionCreators({getProducts: getProducts},dispach);
  }
  
  export default connect(mapStateToProps, matchDispachToProps)(Products);
