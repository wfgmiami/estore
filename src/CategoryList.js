import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const ProductListItem = ({ product }) => (

  <div className="col-xs-6">

    <img style={{ width:'100%', marginBottom:'0', marginTop:'10%' }} className="thumbnail" src={ product.imageUrl } />
    <div> { product.name }<Link className="glyphicon glyphicon-shopping-cart pull-right"></Link><span className="pull-right"> ${ product.price }{ " | "}</span></div>

  </div>
)

const CategoryList = ( props ) => {
  let filteredProducts;
  if(props.route.path === '/eyeglasses'){
    filteredProducts = props.products.filter(product=> product.categoryId === 1);
  }else{
    filteredProducts = props.products.filter(product=> product.categoryId === 2);
  }

  return (
    <div className = "row">
        { filteredProducts.map( product => {
        return <ProductListItem key={ product.id } product={ product }/> }) }
    </div>
)}

const mapStateToProps = (store) => {
  return {
    products: store.products.allProducts
  }
}

export default connect(mapStateToProps)(CategoryList)
