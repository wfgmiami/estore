import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const ProductListItem = ({ product }) => (

  <div className="col-xs-6">

    <img style={{ width:'100%', marginBottom:'0', marginTop:'10%' }} className="thumbnail" src={ product.imageUrl } />
    <div> { product.name }<Link className="glyphicon glyphicon-shopping-cart pull-right"></Link><span className="pull-right"> ${ product.price }{ " | "}</span></div>

  </div>

)

const ProductList = ( { products } ) => {
  return (
    <div className = "row">
        { products.map( product => {
        return <ProductListItem key={ product.id } product={ product }/> }) }
    </div>
)}

const mapStateToProps = (store) => {
  return {
    products: store.products.allProducts
  }
}


export default connect(mapStateToProps)(ProductList)


