import Map from "./Map";
import styled from "styled-components";
import { useMarkers } from "../hooks/useMarkers";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function MapContainer() {
  const { pathname } = useLocation();

  const { markers } = useMarkers("developing");
  return (
    <Container>
      <Map markers={markers} />
    </Container>
  );
}
export default MapContainer;
