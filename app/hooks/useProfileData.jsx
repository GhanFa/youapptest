"use client";
import fetchProfileData from "@/lib/profile";
import { useCallback, useEffect, useState } from "react";
// Sesuaikan path sesuai dengan lokasi file

const useProfileData = (refreshData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const profileData = await fetchProfileData();

      setData(profileData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refreshData: fetchData };
};

export default useProfileData;
