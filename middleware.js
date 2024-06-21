export {default} from "next-auth/middleware";

export const config = {
  matcher: ['/dashboard/:path*'], // Apply this middleware to the login page and dashboard routes
};
