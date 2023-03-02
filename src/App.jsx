import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MapContainer from "./components/MapContainer";
import Nav from "./components/Nav";
import Temp from "./components/Temp";

function App() {
  return (
    <>
      <CssBaseline />
      <MapContainer />
      <Nav />
      <Routes>
        <Route path="/create" />
        <Route path="/location" />
        <Route path="/search" />
        <Route path="/user" />
      </Routes>
      <Temp />
    </>
  );
}

export default App;
