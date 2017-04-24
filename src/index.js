import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import CategoryList from './CategoryList'
import ProductList from './ProductList';
import App from './App';
import LoginPage from './LoginPage';

const root = document.getElementById('app');

const route = (
  <Provider store = { store } >
    <Router history = { hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ ProductList }/>
        <Route path='/eyeglasses' component={ CategoryList }/>
        <Route path='/sunglasses' component={ CategoryList }/>
        {/*<Route path='login' component={ LoginPage } />*/}
        </Route>
    </Router>
  </Provider>
)

render(route, root);
