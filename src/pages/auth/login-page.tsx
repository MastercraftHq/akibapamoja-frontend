/** @format */
import { Button } from "@/components/ui/button";
import { useState, type ChangeEvent } from "react"; 
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";

interface LocationState {
  successMessage?: string;
  prefilledIdentifier?: string;
}

const LoginPage = () => {
  const { loginUser, loading, error } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  // Get success message from registration redirect
  const { successMessage, prefilledIdentifier } =
    (location.state as LocationState) || {};

  const [loginData, setLoginData] = useState({
    identifier: prefilledIdentifier || "", // Can be email OR phone
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const response = await loginUser(loginData);

    if (response?.authToken) {
      // Optional chaining
      console.log("Login success:", response);

      // Safe storage with fallbacks
      if (response.authToken)
        localStorage.setItem("authToken", response.authToken);
      if (response.refreshToken)
        localStorage.setItem("refreshToken", response.refreshToken);
      if (response.userId) localStorage.setItem("userId", response.userId);

      navigate("/dashboard");
    }
  };

  const isFormValid = loginData.identifier && loginData.password;

  return (
    <div className="flex flex-col min-h-screen font-geist px-2 sm:px-4 py-8">
      <div className="flex justify-between">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/register">
            <ArrowRight size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-center mb-8 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Enter your email or phone number and
            <br />
            password to sign back in.
          </p>
        </div>

        {/* Success message from registration */}
        {successMessage && (
          <div className="w-full max-w-sm mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="w-full max-w-sm">
          <div className="space-y-4 mb-6">
            {/* Identifier input (email OR phone) */}
            <div>
              <input
                type="text"
                name="identifier"
                placeholder="Email or phone number"
                value={loginData.identifier}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 sm:py-4 text-black placeholder-gray-400 outline-none text-base"
              />
            </div>

            {/* Password input */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 sm:py-4 text-black placeholder-gray-400 outline-none text-base"
              />
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="text-right mb-8">
            <Link
              to="/forgot-password"
              className="text-primary text-md hover:text-primary transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            onClick={handleLogin}
            disabled={loading || !isFormValid}
            className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg font-semibold text-base"
          >
            {loading ? "Signing in..." : "Continue"}
          </Button>

          <p className="text-center text-gray-600 text-sm mt-8">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-primary transition-colors ml-1"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
