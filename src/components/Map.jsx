import { useState, useEffect, useRef } from "react";

// coords: 일반 자바스크립트 배열
// position: 카카오맵 좌표 객체

const { kakao } = window;
const defaultCoords = [33.450701, 126.570667];

function Map() {
  const [coords, setCoords] = useState(defaultCoords);
  const mapRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const targetPosition = new kakao.maps.LatLng(...coords);
    mapRef.current?.setCenter(targetPosition);
  }, [coords]);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(...defaultCoords),
      level: 3, //지도의 확대, 축소 정도
    };
    mapRef.current = new kakao.maps.Map(container.current, options);

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCoords([latitude, longitude])
    );
  }, []);

  function displayMarker(coords, content) {
    const map = mapRef.current;
    const position = new kakao.maps.LatLng(...coords);
    const marker = new kakao.maps.Marker({ map, position });

    const infowindow = new kakao.maps.InfoWindow({
      content,
      removable: true,
    });

    // 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);
    map.setCenter(position);
  }

  return (
    <>
      <div ref={container} style={{ width: "100%", height: "100%" }} />
      {/* <button onClick={() => displayMarker(coords, "You are here")}>Pin</button> */}
    </>
  );
}

export default Map;
