import React from "react";

import { connect } from 'react-redux';

import { getData } from '../actions';

import trumpVector from "../images/trump_vector.png";

import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const SearchButton = styled.button`
  width: 10%;
  margin: 2% auto;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  padding: 0.25em 1em;
`
const TrumpImg = styled.img`
  width: 20%;
`

const FetchingH3 = styled.h3`
  margin: 2% auto;
`


const QuoteForm = props => {

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return(
    <SearchContainer>
      <div>
        <TrumpImg src={trumpVector}/>
      </div>
      {props.isFetchingData ? (
        <FetchingH3>... We are searching for a random quote!</FetchingH3>
      ) : (
        <SearchButton onClick={handleGetData}>Get Quote</SearchButton>
      )}
    </SearchContainer>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(QuoteForm);