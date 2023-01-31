import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import tempMarkers from "../assets/temp.json";

const serverUrl = "http://localhost:3000/";

// TODO: 비정상적으로 많은 렌더링
// 훅 사용처에서 에러핸들링

export function useMarkers(mode) {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMarkers = async () => {
    setLoading(true);
    try {
      const markers = await fetch(serverUrl).then((res) => res.json());
      setMarkers(markers);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (mode !== "developing") getMarkers();
  }, []);

  if (mode === "developing") {
    return {
      markers: tempMarkers,
      loading: false,
      error: null,
      createMarker: () => console.log("Developing mode"),
    };
  }

  const createMarker = async ({ title, coords, diary, authorId }) => {
    setLoading(true);
    try {
      const markers = await fetch(serverUrl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: nanoid(), title, coords, diary, authorId }),
      }).then((res) => res.json());

      setMarkers(markers);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { markers, loading, error, createMarker };
}
