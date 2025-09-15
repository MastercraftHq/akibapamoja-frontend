/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Zod schema for form validation
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

  // Password requirements check
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
    <div className="min-h-screen bg-white font-geist">
      <div className="flex justify-between w-full p-4">
        {/* Back to display-name */}
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/register/display-name">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>

        {/* Forward to dashboard (or next step) */}
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/dashboard">
            <ArrowRight size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>

      <div className="bg-white p-6 sm:p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-8 text-gray-900">
          Set up your password
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  {password && strength && !form.formState.errors.password && (
                    <div className="mt-3">
                      <span className={`text-sm font-medium ${strength.color}`}>
                        Password strength: {strength.level}
                      </span>
                    </div>
                  )}

                  <FormMessage />

                  {/* Requirements */}
                  {!form.formState.errors.password && (
                    <FormDescription className="text-xs text-gray-600 leading-relaxed">
                      Your password should be at least 8 characters long with
                      one special character like ($,#,!,*,&,@.)
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
                        className="w-full  border-2 rounded-lg px-4 py-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent border-gray-200 focus-visible:border-gray-400"
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
                className="w-full text-white py-7 sm:py-7  rounded-lg font-semibold text-base"
              >
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SetPasswordPage;
