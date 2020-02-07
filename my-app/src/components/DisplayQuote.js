import React from "react";

import { connect } from "react-redux";

import { getData } from "../actions";

import styled from "styled-components";

import trumpProfile from "../images/trump_profile.png";

const Card = styled.div`
  display: flex;
  width: 80%;
  padding: 2% 10%;
  `

const TrumpImg = styled.img`
  width: 50%;
`

const InfoDiv = styled.div`
  width:120%
`

const DisplayQuote = props => {
  console.log("this is props.quotes", props.quotes);
  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.quotes.map((quote) => {
          return <Card>
            <div>
              <TrumpImg src={trumpProfile}/>
            </div>
            <InfoDiv>
              <h3>Quote: {quote.value}</h3>
              <h3>About: {quote.tags}</h3>
            </InfoDiv>
          </Card>;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(DisplayQuote);