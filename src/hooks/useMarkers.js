import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import tempMarkers from "../assets/temp.json";

const serverUrl = "http://localhost:3000/";

// TODO: 비정상적으로 많은 렌더링
// 훅 사용처에서 에러핸들링
// 서버측 API 구현
// fetch 관련 써드파티 라이브러리 훅으로 대체

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
      getMarker: () => console.log("Developing mode"),
      createMarker: () => console.log("Developing mode"),
      updateMarker: () => console.log("Developing mode"),
      deleteMarker: () => console.log("Developing mode"),
    };
  }

  const getMarker = async ({ currentId }) => {
    setLoading(true);
    try {
      const marker = await fetch(`${serverUrl}/marker/${currentId}`).then(
        (res) => res.json()
      );
      return marker;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

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

  const updateMarker = async (currentId, { title, diary }) => {
    setLoading(true);
    try {
      const markers = await fetch(serverUrl, {
        method: "patch",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentId, title, diary }),
      }).then((res) => res.json());

      setMarkers(markers);
    } catch (err) {
      setError(err);
    }
  };

  const deleteMarker = async (currentId) => {
    setLoading(true);
    try {
      const markers = await fetch(serverUrl, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentId }),
      }).then((res) => res.json());

      setMarkers(markers);
    } catch (err) {
      setError(err);
    }
  };

  return {
    markers,
    loading,
    error,
    getMarker,
    createMarker,
    updateMarker,
    deleteMarker,
  };
}
