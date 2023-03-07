import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";

//importing the MapData (cordinates,country info)
import { MapData } from "./MapData";

const Form = (props) => {
  const dispatch = useDispatch();

  //index state
  const [data, setData] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(data));
  };

  return (
    <>
      <Container>
        <Content>
          <label htmlFor="country">Select Country</label>
          <form onSubmit={(e) => handleSubmit(e)}>
            <select value={data} onChange={(e) => setData(e.target.value)}>
              <option value="0">India</option>
              <option value="1">United States</option>
              <option value="2">United kingdom</option>
            </select>
            <button type="submit">Submit</button>
          </form>

          <Section>
            <span>Currency Symbol : {MapData[props.user].symbol}</span>
            <span>Speed Unit : {MapData[props.user].speedUnit}</span>
            <span>Distance Unit : {MapData[props.user].distanceUnit}</span>
            <span>Volume Unit : {MapData[props.user].volumeUnit}</span>
            <span>Timezone : {MapData[props.user].timezone}</span>
          </Section>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 15%;
  left: 70%;
  right: 8%;
  bottom: 55%;
  z-index: 3;
  color: black;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.07);

  @media (max-width: 768px) {
    left: 42%;
    right: 4%;
    bottom: 52%;
  }
`;

const Content = styled.div`
  width: 100%;

  background-color: white;
  max-height: 90%;
  overflow: initial;

  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  align-items: center;
  margin: 0 auto;

  form {
    display: flex;
    margin-top: 7px;
    select {
      width: 70%;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      background: #fafbfc;
      border-color: transparent;
      border: 1px solid #dbe0ea;
      @media (max-width: 768px) {
        margin-left: 1em;
        width: 50%;
      }
    }

    button {
      padding: 8px 15px;
      border-radius: 0 7px 7px 0;
      border: none;

      z-index: 7;
      margin-left: -1px;
      background-color: #da4711;
      color: white;
      &:hover {
        background-color: #1d50e9;
      }

      @media (max-width: 768px) {
      }
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  span {
    font-size: 15px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Form);
