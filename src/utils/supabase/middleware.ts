import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";
import { Database } from "../../../database.types";

export const updateSession = async (request: NextRequest) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // This will refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // customer
  // driver
  // executive
  // supervisor
  // operator

  //Authorization checks
  if (user) {
    const role_data = await supabase
      .from("user_accounts")
      .select("role")
      .eq("id", user?.id as string);

    const role = role_data.data?.[0]?.role as string;

    // check if a user is a customer or driver
    if (role === "customer" || role === "driver") {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (pathname.startsWith("/auth")) {
      // redirects to specific role if in /auth
      return NextResponse.redirect(new URL(`/dashboard`, request.url));
    } else {
      // redirects executives from / to /executive
      if (pathname === "/" && role === "executive") {
        return NextResponse.redirect(new URL("/executive", request.url));
      }

      // redirects supervisors from / to /supervisor
      if (pathname === "/" && role === "supervisor") {
        return NextResponse.redirect(new URL("/supervisor", request.url));
      }

      // redirects operators from / to /operator
      if (pathname === "/" && role === "operator") {
        return NextResponse.redirect(new URL("/operator", request.url));
      }

      // redirects non-executives to their role
      if (pathname.startsWith("/executive") && role !== "executive") {
        return NextResponse.redirect(new URL(`/dashboard`, request.url));
      }

      // redirects non-supervisors to their role
      if (pathname.startsWith("/supervisor") && role !== "supervisor") {
        return NextResponse.redirect(new URL(`/dashboard`, request.url));
      }

      // redirects non-operators to their role
      if (pathname.startsWith("/operator") && role !== "operator") {
        return NextResponse.redirect(new URL(`/dashboard`, request.url));
      }
    }
  } else if (user === null) {
    if (
      pathname.startsWith("/executive") ||
      pathname.startsWith("/supervisor") ||
      pathname.startsWith("/operator") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
};

//   // check if a user is a customer or driver
//   if (role === "customer" || role === "driver") {
//     return NextResponse.redirect(new URL("/", request.url));
//   } else if (pathname.startsWith("/auth")) {
//     // redirects to specific role if in /auth
//     return NextResponse.redirect(new URL(`/${role}`, request.url));
//   } else {
//     // redirects executives from / to /executive
//     if (pathname === "/" && role === "executive") {
//       return NextResponse.redirect(new URL("/executive", request.url));
//     }

//     // redirects supervisors from / to /supervisor
//     if (pathname === "/" && role === "supervisor") {
//       return NextResponse.redirect(new URL("/supervisor", request.url));
//     }

//     // redirects operators from / to /operator
//     if (pathname === "/" && role === "operator") {
//       return NextResponse.redirect(new URL("/operator", request.url));
//     }

//     // redirects non-executives to their role
//     if (pathname.startsWith("/executive") && role !== "executive") {
//       return NextResponse.redirect(new URL(`/${role}`, request.url));
//     }

//     // redirects non-supervisors to their role
//     if (pathname.startsWith("/supervisor") && role !== "supervisor") {
//       return NextResponse.redirect(new URL(`/${role}`, request.url));
//     }

//     // redirects non-operators to their role
//     if (pathname.startsWith("/operator") && role !== "operator") {
//       return NextResponse.redirect(new URL(`/${role}`, request.url));
//     }
//   }
// } else if (user === null) {
//   if (
//     pathname.startsWith("/executive") ||
//     pathname.startsWith("/supervisor") ||
//     pathname.startsWith("/operator") ||
//     pathname.startsWith("/dashboard")
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }
