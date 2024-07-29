import { withClerkMiddleware } from "@clerk/nextjs";
// import { WithClerkMiddleware } from "@clerk/nextjs/server";

export default withClerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};








// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//    publicRoutes : ['/api/Webhooks/clerk']
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };