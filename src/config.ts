export const BASE_URL = import.meta.env.VITE_BASE_URL;

// paths
export const PATHS = {
  home: "/",
  login: (redirect?: string) =>
    redirect ? `/auth/login?redirect=${redirect}` : "/auth/login",
  signup: "/auth/register",
  contactUs: "/contact-us",
  forgotPassword: "/auth/forgot-password",
  dashboard: {
    index: "/dashboard",
    profile: "/dashboard/profile",
    settings: "/dashboard/settings",
  }
};