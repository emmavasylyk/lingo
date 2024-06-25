import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/stripe"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// export default authMiddleware({
//   // Routes that can be accessed while signed out
//   publicRouters: ["/anyone-can-visit-this-route"],
//   // Routes that can always be accessd, and have
//   // no authentication information
//   ignoredRoutes: ["/no-auth-in-this-route"],
// });

// export const config = {
//   // Protects all routes, including api/trpc.
//   // See https://clerk.com/docs/reference/nextjs/auth-middleware
//   // for more information about configuring your Middleware
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
