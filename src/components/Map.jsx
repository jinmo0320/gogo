import { useState, useEffect, useRef } from "react";

const { kakao } = window;
const defaultCoords = [33.450701, 126.570667];

function Map() {
  const [coords, setCoords] = useState(defaultCoords);
  const mapRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const targetCoords = new kakao.maps.LatLng(...coords);
    mapRef.current?.setCenter(targetCoords);
  }, [coords]);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(...defaultCoords),
      level: 3, //지도의 확대, 축소 정도
    };
    const map = new kakao.maps.Map(container.current, options);
    mapRef.current = map;

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCoords([latitude, longitude])
    );
  }, []);

  return <div ref={container} style={{ width: "500px", height: "400px" }} />;
}

export default Map;
