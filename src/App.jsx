import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Home from "./router/Home";
import Search from "./router/Search";
import Me from "./router/Me";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ControlContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 3rem;
  display: grid;
  grid-template-rows: 2rem 1fr;

  background-color: white;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.2);
  width: 15rem;
  height: 80%;
  border-radius: 10px;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Map />
        <ControlContainer>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </ControlContainer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
