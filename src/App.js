import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import Filterbar from './Filterbar';

const App = ({ children, products, user }) => (

  <div className = "container">
    <h3 className="well">GRACE SHOPPER</h3>

    <div className="row">
      <div className="col-xs-2">
        <Sidebar />
      </div>

      <div className="col-xs-6">
        <Filterbar />
        { children }
      </div>
    {/*<Link to='/'>Home</Link> { '|' } {' '}
    <Link to='/categories'>s ({ products.length })</Link>
    {' | '}

    <Link to='/login'>Log In</Link>
    {' | '} { user ? `Welcome ${ user.name }` : null }*/}
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
