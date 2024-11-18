"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/auth";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/"); // Alihkan ke halaman login jika token tidak ada
    } else {
      setLoading(false); // Set loading false jika token valid
    }
  }, [router]);

  if (loading) return null; // Jangan render halaman jika sedang memuat pengecekan token
};
