
import { useEffect, useState } from "react";

export default function useApi(apiFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setLoading(true);
      setError("");

      try {
        const result = await apiFunction({
          signal: controller.signal,
        });

        setData(result);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(
            err.message || "Impossible de charger les données."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => controller.abort();
  }, [apiFunction]);

  return { data, loading, error };
}
