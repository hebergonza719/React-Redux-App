import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';

import QuoteForm from "./components/QuoteForm";

import DisplayQuote from './components/DisplayQuote';

import thunk from "redux-thunk";

import './App.css';

import { trunaldReducer as reducer } from './reducers/trunaldReducer';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 className="heading">Random Donald Trump Quotes</h1>
        <QuoteForm />
        <DisplayQuote />
      </div>
    </Provider>
  );
}

export default App;
