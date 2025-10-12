/** @format */

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegister } from "@/hooks/useRegister";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

const SetPasswordPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { registerUser, loading, error } = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { contact, method, firstName, lastName, email, phone } =
    location.state || {};

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { password: "", confirmPassword: "" },
  });

  // Watch both fields to check if they match
  const { password, confirmPassword } = form.watch();

  useEffect(() => {
    if (!contact && !email && !phone) {
      navigate("/auth/register");
    }
  }, [contact, email, phone, navigate]);

  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return null;
    const hasLength = pwd.length >= 8;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (hasLength && hasSpecial)
      return { level: "Excellent", color: "text-green-600" };
    if (hasLength || hasSpecial)
      return { level: "Weak", color: "text-yellow-600" };
    return { level: "Weak", color: "text-red-600" };
  };

  const onSubmit = async (data: FormData) => {
    if (!contact && !email && !phone) return;

    const userData = {
      email: email || (method === "email" ? contact : ""),
      phone: phone || (method === "phone" ? contact : ""),
      password: data.password,
      first_name: firstName || "",
      last_name: lastName || "",
    };

    console.log("📤 Sending to API:", userData);

    const response = await registerUser(userData);

    if (response) {
      console.log("Registration success:", response);
      navigate("/auth/login", {
        state: {
          message: "Account created successfully! Please log in.",
          prefilledIdentifier: contact || email || phone,
        },
      });
    }
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="min-h-screen bg-white font-geist">
      <div className="p-4">
        <Button variant="ghost" size="sm" className="p-2">
          <Link to="/auth/register/display-name">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>

      <div className="p-6 sm:p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Set up your password</h1>

        {/* Contact info summary */}
        <div className="mb-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Creating account with: <strong>{contact || email || phone}</strong>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Paasword"
                        className="w-full border-2 rounded-lg px-4 py-6 text-lg"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      >
                        {showPassword ? (
                          <EyeOff size={24} />
                        ) : (
                          <Eye size={24} />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  {password && strength && !form.formState.errors.password && (
                    <div className="mt-3">
                      <span className={`text-sm font-medium ${strength.color}`}>
                        Password strength: {strength.level}
                      </span>
                    </div>
                  )}
                  <FormMessage />
                  <FormDescription className="text-xs">
                    At least 8 characters with one special character
                    ($,#,!,*,&,@.)
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confrim Password"
                        className="w-full border-2 rounded-lg px-4 py-6 text-lg"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={24} />
                        ) : (
                          <Eye size={24} />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                  {confirmPassword &&
                    password &&
                    confirmPassword === password && (
                      <div className="text-sm text-green-600">
                        Passwords match
                      </div>
                    )}
                </FormItem>
              )}
            />

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <Button
              type="submit"
              disabled={loading || !form.formState.isValid}
              className="w-full text-white py-7 rounded-lg font-semibold text-base"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SetPasswordPage;
