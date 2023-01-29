import { useState, useEffect } from "react";
import { Map as KaKaoMap, MapMarker } from "react-kakao-maps-sdk";

const serverUrl = "http://localhost:3000/";

function Map() {
  const [coords, setCoords] = useState([33.450701, 126.570667]);
  const [markers, setMarkers] = useState([]);

  // TODO: geolocation 못 쓰거나 사용 거절 당한 경우 핸들링
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCoords([latitude, longitude])
    );

    // TODO: coords state 변경으로 두 번 요청 보내는 문제
    // 요청 실패 핸들링
    fetch(serverUrl)
      .then((res) => res.json())
      .then((json) => setMarkers(json));
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
