import React from "react";
import MapElement from "./MapElement";
import styled from "styled-components";
import Form from "./Form";

const Home = () => {
  return (
    <Main>
      <MapElement />
      <Form />
    </Main>
  );
};

const Main = styled.div`
  height: 100%;
  width: 100%;
`;

export default Home;
