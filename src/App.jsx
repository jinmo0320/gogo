import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import Map from "./components/Map";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container>
        <Map />
      </Container>
    </BrowserRouter>
  );
}

export default App;
