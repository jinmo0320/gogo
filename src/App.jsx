import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import SvgIcon from "@mui/material/SvgIcon";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Home from "./router/Home";
import Search from "./router/Search";
import Me from "./router/Me";

import { useMarkers } from "./hooks/useMarkers";

const Container = styled.div`
  position: absolute;
  width: 95%;
  height: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: auto 1fr;

  border: 2px solid #c4c4c4;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;
`;

const ControlContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr;
  position: relative;

  background-color: white;
  width: 20rem;
  height: 100%;
  border-right: 2px solid #c4c4c4;

  overflow: hidden;
`;
const MapContainer = styled.div``;
const CreateBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  margin: 1rem;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 100px;
  background-color: #74b9ff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const sx = {
  color: "white",
  fontSize: "2rem",
};

function App() {
  const { markers, createMarker } = useMarkers("developing");

  function handleClick() {
    const newMarker = {
      title: "지세포 굴구이",
      coords: { lat: 34.82890487884411, lng: 128.70277809518603 },
      diary: "지세포 굴구이 굴구이 지세포 세포 굴구이 지세포 굴구이",
      authorId: "asdfasdf",
    };
    createMarker(newMarker);
  }

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
          <CreateBtn onClick={handleClick}>
            <SvgIcon component={DriveFileRenameOutlineRoundedIcon} sx={sx} />
          </CreateBtn>
        </ControlContainer>
        <MapContainer>
          <Map markers={markers} />
        </MapContainer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
