import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import FilterList from './FilterList';

const App = ({ children, products, user }) => (

  <div className = "container-fluid">
    <h3 className="well">GRACE SHOPPER</h3>

    <div className="row">
      <div className="col-xs-2">
        <Sidebar />
      </div>

      <div className="col-xs-6">
        <FilterList />
        { children }
      </div>
      <div className="col-xs-4">
        <LoginPage />
      </div>
    </div>

  </div>
  )

const mapStateToProps = (state) => (
  {
    products: state.products,
    user: state.auth.user
  }
)
export default connect(mapStateToProps)(App);
