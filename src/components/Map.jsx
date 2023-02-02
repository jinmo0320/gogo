import { Map as KaKaoMap, MapMarker } from "react-kakao-maps-sdk";
import { useGeolocation } from "../hooks/useGeolocation";

const NoGeolocationAlert = () => (
  <>해당 브라우저에서는 위치 정보 서비스 기능을 사용할 수 없습니다</>
);

const UserDeniedAlert = () => (
  <a href="https://support.google.com/chrome/answer/142065?hl=ko">
    브라우저 설정을 통해 위치 정보 서비스 사용에 동의해 주세요
  </a>
);

function Map({ markers }) {
  const {
    coords: [currentLat, currentLng],
    error,
  } = useGeolocation([33.450701, 126.570667]);

  switch (error?.code) {
    case 0:
      return <NoGeolocationAlert />;

    case 1:
      return <UserDeniedAlert />;

    default:
      return (
        <KaKaoMap
          center={{ lat: currentLat, lng: currentLng }}
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
}

export default Map;
