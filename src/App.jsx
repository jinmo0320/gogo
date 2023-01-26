import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Home from "./router/Home";
import Search from "./router/Search";
import Me from "./router/Me";

const Container = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: 16rem 1fr;

  border: 2px solid #c4c4c4;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;
`;

const ControlContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr;

  background-color: white;
  width: 16rem;
  height: 100%;
  border-right: 2px solid #c4c4c4;

  overflow: hidden;
`;
const MapContainer = styled.div``;

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container>
        <ControlContainer>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </ControlContainer>
        <MapContainer>
          <Map />
        </MapContainer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
