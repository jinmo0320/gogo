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
        <Map markers={markers} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
