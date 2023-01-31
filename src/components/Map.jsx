import { useState, useEffect } from "react";
import { Map as KaKaoMap, MapMarker } from "react-kakao-maps-sdk";

function Map({ markers }) {
  const [coords, setCoords] = useState([33.450701, 126.570667]);

  // TODO: geolocation 못 쓰거나 사용 거절 당한 경우 핸들링
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCoords([latitude, longitude])
    );
  }, []);

  const currentPosition = {
    lat: coords[0],
    lng: coords[1],
  };

  return (
    <KaKaoMap
      center={currentPosition}
      style={{ width: "100%", height: "100%" }}
    >
      {markers.map((marker) => (
        <MapMarker key={marker.id} position={marker.coords}>
          <div style={{ padding: "5px", color: "#000", fontSize: "16px" }}>
            {marker.title}
          </div>
        </MapMarker>
      ))}
    </KaKaoMap>
  );
}

export default Map;
