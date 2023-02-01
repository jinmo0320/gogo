import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import Map from "./components/Map";

import { useMarkers } from "./hooks/useMarkers";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App() {
  const { markers } = useMarkers("developing");

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container>
        <Map markers={markers} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
