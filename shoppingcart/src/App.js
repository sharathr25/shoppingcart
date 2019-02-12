import React, { Component } from 'react';
import Shopping from './components/shopping';
import CheckOut from './components/checkout';
import { ToastContainer } from 'react-toastify';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route path="/shopping" component={Shopping} />
          <Route path="/checkout" component={CheckOut} />
        </div>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        />
      </div>
    );
  }
}

export default App;
