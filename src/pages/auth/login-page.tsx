/** @format */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft, ArrowRight } from "lucide-react";
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
    country: "ke", // For UI only
    remember: false, // For UI only
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (value: string) => {
    setLoginData((prev) => ({ ...prev, country: value }));
  };

  const handleLogin = async () => {
    const response = await loginUser({
      identifier: loginData.identifier,
      password: loginData.password,
    });

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
    <div className="min-h-screen bg-white flex flex-col md:items-center md:justify-center p-4">
      <div className="w-full max-w-md space-y-8 flex-1 flex flex-col">
        {/* Logo for desktop */}
        <div className="hidden md:flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-center space-y-2 md:mt-0 mt-8">
          <h1 className="text-2xl md:text-2xl font-semibold text-gray-900">
            <span className="md:hidden">Welcome back</span>
            <span className="hidden md:inline">Log in to your account</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            <span className="md:hidden">
              Enter your phone number and password to sign in.
            </span>
            <span className="hidden md:inline">
              Welcome back! Choose your chama and log in
            </span>
          </p>
        </div>

        {/* Success message from registration */}
        {successMessage && (
          <div className="w-full max-w-sm mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <div className="space-y-6 md:mb-0 mb-20">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="login"
                className="text-sm font-medium text-gray-700 md:block hidden"
              >
                Phone number
              </Label>
              <div className="md:hidden flex space-x-2">
                <Select defaultValue={loginData.country} onValueChange={handleCountryChange}>
                  <SelectTrigger className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ke">KE +254</SelectItem>
                    <SelectItem value="us">US +1</SelectItem>
                    <SelectItem value="uk">UK +44</SelectItem>
                    <SelectItem value="ng">NG +234</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="login"
                  name="identifier"
                  type="tel"
                  placeholder="Phone number"
                  value={loginData.identifier}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="hidden md:block">
                <Input
                  id="login"
                  name="identifier"
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.identifier}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 md:block hidden"
              >
                Password
              </Label>
              <div className="md:hidden">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="hidden md:block">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" name="remember" checked={loginData.remember} onCheckedChange={(checked) => setLoginData((prev) => ({ ...prev, remember: !!checked }))} className="border-gray-300" />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Remember for 30 days
              </Label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Forgot password
            </Link>
          </div>

          {/* Sign in button */}
          <Button
            onClick={handleLogin}
            disabled={loading || !isFormValid}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg font-medium"
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>

          {/* Social login buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2 bg-transparent"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-gray-700">Sign in with Google</span>
            </Button>

            <Button
              variant="outline"
              className="w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2 bg-transparent"
            >
              <svg
                className="w-5 h-5 text-[#1877F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-700">Sign in with Facebook</span>
            </Button>
          </div>

          <div className="md:text-center md:mt-0 mt-auto">
            <div className="md:block flex flex-col items-center py-4 bg-gray-50 md:bg-transparent fixed md:static bottom-0 left-0 right-0 border-t md:border-t-0">
              <span className="text-gray-600 text-sm mb-1 md:mb-0">
                <span className="md:hidden">Want to create a new chama? </span>
                <span className="hidden md:inline">Don't have an account? </span>
              </span>
              <Link
                to="/auth/register"
                className="text-purple-600 hover:text-purple-500 font-medium text-sm"
              >
                <span className="md:hidden">Sign up for free</span>
                <span className="hidden md:inline">Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
