import { useState, useEffect } from "react";

export function useGeolocation(initialCoords) {
  const [coords, setCoords] = useState(initialCoords);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSuccess = ({ coords: { latitude, longitude } }) => {
    setCoords([latitude, longitude]);
    setLoading(false);
  };

  const onError = ({ code, message }) => {
    // 유저 거부시 err: {code: 1, message: 'User denied Geolocation'}
    setError({ code, message });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      setError({ code: 0, message: "Geolocation is not surpported" });
      setLoading(false);
    }
  }, []);

  return { coords, loading, error };
}
