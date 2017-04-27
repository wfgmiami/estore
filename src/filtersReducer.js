// import { LOAD_FILTERS_SUCCESS } from './constants';
// import axios from 'axios';


// const filtersReducer = (state=[], action) => {

//   switch(action.type){
//     case LOAD_FILTERS_SUCCESS:
//       state = action.filters
//       break;
//     default:
//       state;
//   }
//   return state;
// }


// const loadFiltersSuccess = (filters) => ({
//   type: LOAD_FILTERS_SUCCESS,
//   filters: filters
// })

// const loadFilters = () => {
//   return (dispatch) =>{
//     axios.get('/api/filters')
//     .then( response => response.data)
//     .then( filters => dispatch(loadFiltersSuccess(filters)))
//   }
// }

// export { loadFilters }
// export default filtersReducer;






