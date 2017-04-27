import { LOAD_PRODUCTS_SUCCESS,LOAD_FILTERS_SUCCESS } from './constants';
import axios from 'axios';

const initialState = {
  allProducts:[],
  allFilters:[],
  filteredProducts:[]
}

const productsReducer = (state = initialState, action) => {

  switch(action.type){
    case LOAD_PRODUCTS_SUCCESS:
      state = Object.assign({}, state, { allProducts: action.products })
      break;
    case LOAD_FILTERS_SUCCESS:
      state = Object.assign({}, state, { allFilters: action.filters })
      break;
    default:
      state;
  }
  return state;
}

const loadProductSuccess = (products) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    products: products
})

const loadFiltersSuccess = (filters) => ({
  type: LOAD_FILTERS_SUCCESS,
  filters: filters
})

const loadProducts = () => {
  return (dispatch) =>{
    axios.get('/api/products')
    .then( response => dispatch(loadProductSuccess(response.data)))
    .then(() => axios.get('/api/filters'))
    .then( response => dispatch(loadFiltersSuccess(response.data)))
  }
}

const loadFiltered = (filter) => {
  return (dispatch) =>{
    axios.get('/api/products/:filter')
    .then( response => dispatch(loadProductSuccess(response.data)))
  }
}


export { loadProducts, loadFiltered }
export default productsReducer;
