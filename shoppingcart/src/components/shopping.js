import React, { Component } from 'react';
import Products from './products';
import NavBar from './navbar';
import '../App.css';

class Shopping extends Component {
  render() {
    return (
    <div>
      <NavBar />
      <Products />
    </div>
    );
  }
}

export default Shopping;
