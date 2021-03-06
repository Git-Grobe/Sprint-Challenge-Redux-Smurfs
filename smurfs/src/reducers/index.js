/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE, DELETE_START, DELETE_SUCCESS, DELETE_FAILURE } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }
    case POST_START: {
      return {
        ...state,
        addingSmurf: true,
        error: null
      }
    }
    case POST_SUCCESS: {
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    }
    case POST_FAILURE: {
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    }
    case DELETE_START: {
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
    }
    case DELETE_SUCCESS: {
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      }
    }
    case DELETE_FAILURE: {
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    }
    default: return state;
  }
}


