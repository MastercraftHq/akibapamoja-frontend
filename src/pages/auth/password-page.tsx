/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { assets } from "@/assets/assets";

// ✅ Zod schema for validation
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

interface PasswordRequirements {
  length: boolean;
  special: boolean;
}

interface PasswordStrength {
  level: "Excellent" | "Weak";
  color: string;
}

const SetPasswordPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password", "");
  const confirmPassword = form.watch("confirmPassword", "");

  // ✅ Password requirements check
  const getPasswordRequirements = (pwd: string): PasswordRequirements => {
    return {
      length: pwd.length >= 8,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };
  };

  const getPasswordStrength = (pwd: string): PasswordStrength | null => {
    if (!pwd) return null;

    const requirements = getPasswordRequirements(pwd);
    const hasLength = requirements.length;
    const hasSpecial = requirements.special;

    if (hasLength && hasSpecial) {
      return { level: "Excellent", color: "text-green-600" };
    } else if (hasLength || hasSpecial) {
      return { level: "Weak", color: "text-yellow-600" };
    } else {
      return { level: "Weak", color: "text-red-600" };
    }
  };

  const onSubmit = (data: FormData): void => {
    console.log("Form submitted:", data);
    alert("Password Set Successfully!");
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-white font-geist">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/*  Logo */}
          <div className="flex items-center justify-between p-4">
           
            <img
              src={assets.akibalogo}
              alt="Akiba Pamoja"
              className="h-20"
            />
          </div>

          {/* Form container */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white p-6 sm:p-8 max-w-md w-full">
              <h1 className="text-2xl font-semibold mb-8 text-gray-900">
                Set up your password
              </h1>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Password Field */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="w-full border-2 rounded-lg px-4 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent border-gray-200 focus-visible:border-gray-400"
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
                                <EyeOff size={24} className="text-gray-500" />
                              ) : (
                                <Eye size={24} className="text-gray-500" />
                              )}
                            </Button>
                          </div>
                        </FormControl>

                        {/* Password Strength */}
                        {password &&
                          strength &&
                          !form.formState.errors.password && (
                            <div className="mt-3">
                              <span
                                className={`text-sm font-medium ${strength.color}`}
                              >
                                Password strength: {strength.level}
                              </span>
                            </div>
                          )}

                        <FormMessage />

                        {/* Requirements */}
                        {!form.formState.errors.password && (
                          <FormDescription className="text-xs text-gray-600 leading-relaxed">
                            Your password should be at least 8 characters long
                            with one special character like ($,#,!,*,&,@.)
                          </FormDescription>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Confirm Password Field */}
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Confirm password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="w-full border-2 rounded-lg px-4 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent border-gray-200 focus-visible:border-gray-400"
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
                                <EyeOff size={24} className="text-gray-500" />
                              ) : (
                                <Eye size={24} className="text-gray-500" />
                              )}
                            </Button>
                          </div>
                        </FormControl>

                        <FormMessage />

                        {/* Password Match Indicator */}
                        {confirmPassword &&
                          password &&
                          confirmPassword === password &&
                          !form.formState.errors.confirmPassword && (
                            <div className="mt-2 text-sm text-green-600">
                              Passwords match
                            </div>
                          )}
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-8">
                    <Button
                      type="submit"
                      className="w-full text-white py-7 sm:py-7 rounded-lg font-semibold text-base"
                    >
                      Next
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4 flex justify-between items-center text-xs text-gray-500">
  <span>© Akiba Pamoja 2025</span>
  <a href="mailto:info@spaceyatech.com" className="underline">
    info@spaceyatech.com
  </a>
</footer>
      </div>

      {/* Right Section - Testimonial / Image (desktop only) */}
      <div className="hidden lg:flex relative">
        <img
          src= {assets.women}
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover rounded-4xl"
        />
        <div className="absolute inset-0  flex items-end p-10">
          <div className="text-white max-w-md">
            <p className="text-xl font-semibold mb-4">
              “Siku hizi kupata message ni instant juu ya Akiba Pamoja…”
            </p>
            <p className="text-sm">
              Esther Kazdo <br /> Secretary, Kayo Women’s Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
