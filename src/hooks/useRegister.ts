/** @format */
import { useState } from "react";

interface UserData {
  email: string;
  phone: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

interface RegisterResponse {
  // Define based on your API response
  id?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async (userData: UserData): Promise<RegisterResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://akibapamoja-backend.onrender.com/api/users/auth/",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": "" // ← ADD THIS LINE
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      
      if (!res.ok) {
        console.log("Backend error response:", data);
        throw new Error(
          data.detail || 
          data.message || 
          data.error || 
          `Registration failed (${res.status})`
        );
      }

      console.log("✅ Registration success:", data);
      return data;
    } catch (err) {
      console.error("🚨 Registration error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
}