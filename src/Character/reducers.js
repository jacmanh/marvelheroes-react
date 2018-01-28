import { REQUEST_HEROES, REQUEST_FAILED, RECEIVE_HEROES } from './actions';

const initialState = {
  total: 0,
  list: [],
  isFetching: false,
  error: [],
};

const heroes = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_HEROES: 
        return {...state, isFetching: true};
      case REQUEST_FAILED: 
        return {...state, isFetching: false, error: action.error};
      case RECEIVE_HEROES: 
        return {
            ...state, 
            isFetching: false, 
            list: action.data.results,
            total: action.data.total
        }
      default: 
        return state;
    }
};

export default heroes;
