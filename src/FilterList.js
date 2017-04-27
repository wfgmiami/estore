import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFiltered } from './productsReducer.js';

const FilterList = (props) => {
  const onFilter = (e) =>{
    props.loadFiltered(e.target.value)
  }


  return(
    <div className="form-horizontal">
      <hr />
      { props.filters && props.filters.map(attribute =>{
        return(
          <div key={attribute.id} className="col-xs-3">
            <label>{ attribute.name }</label>

            <select onChange={ onFilter } className="form-control">
              { attribute.attributevalues.map(attributeValue => {
              return( <option key={attributeValue.id}>{ attributeValue.name }</option>)
              })}
            </select>
          </div>)
        })
      }

    </div>
  )

}


const mapStoreToProps = (store) => {
  return {
    filters: store.products.allFilters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFiltered: (filterSelection) => dispatch(loadFiltered(filterSelection))
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(FilterList);



