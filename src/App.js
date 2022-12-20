import "./App.css";
import * as React from "react";
import Puzzle from "./components/Puzzle";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Puzzle/>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export default App;
