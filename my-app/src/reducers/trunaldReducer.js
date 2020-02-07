import { FETCH_DATA, UPDATE_DATA, SET_ERROR } from '../actions';

const intialState = {
  quotes: [],
  isFetchingData: false,
  error: ""
};

export const trunaldReducer = (state = intialState, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        isFetchingData: true,
      };
    };
    case UPDATE_DATA: {
      return {
        ...state,
        quotes: [...state.quotes, action.payload],
        isFetchingData: false
      };
    };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  };
};