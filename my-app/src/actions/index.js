import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

export const UPDATE_DATA = "UPDATE_DATA";

export const SET_ERROR = "SET_ERROR";

// here is where you add payloads
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA }); //this toggles if it is being fetched
  setTimeout(() => {
    axios
      .get("https://api.tronalddump.io/random/quote")
      .then(res => {
        console.log("this is res.data", res.data);
        dispatch({ type: UPDATE_DATA, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: SET_ERROR, payload: "Error while getting data from API" })  
      });
  }, 2000);

};