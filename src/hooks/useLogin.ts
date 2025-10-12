/** @format */
import { useState } from "react";

interface LoginData {
  identifier: string;  // Can be email OR phone
  password: string;
}

interface LoginResponse {
  userId?: string;
  authToken?: string;
  refreshToken?: string;
  message?: string;
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (loginData: LoginData): Promise<LoginResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://akibapamoja-backend.onrender.com/api/users/auth/login/",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": "" // Empty authorization header
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await res.json();
      
      if (!res.ok) {
        console.log("🔴 Login error response:", data);
        throw new Error(
          data.detail || 
          data.message || 
          data.error || 
          `Login failed (${res.status})`
        );
      }

      console.log("✅ Login success:", data);
      return data;
    } catch (err) {
      console.error("🚨 Login error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
}