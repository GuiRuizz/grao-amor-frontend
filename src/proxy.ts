import { type MiddlewareConfig, type NextRequest, NextResponse } from "next/server"
import { jwtDecode } from "jwt-decode"

interface TokenPayload {
    role: "ADMIN" | "USER"
}

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in"

export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname

    const token = request.cookies.get("token")?.value

    let role: "ADMIN" | "USER" | null = null

    if (token) {
        try {
            const decoded = jwtDecode<TokenPayload>(token)
            role = decoded.role
        } catch {
            role = null
        }
    }

    // 🧠 helpers
    const isAuthRoute = path === "/sign-in" || path === "/register"
    const isPublicRoute = path === "/" || path === "/pricing"
    const isAdminRoute = path.startsWith("/dashboard")

    // 🚫 NÃO LOGADO
    if (!token) {
        if (isPublicRoute || isAuthRoute) {
            return NextResponse.next()
        }

        return NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE, request.url))
    }

    // ✅ LOGADO tentando acessar login/register
    if (token && isAuthRoute) {
        return NextResponse.redirect(
            new URL(role === "ADMIN" ? "/dashboard" : "/", request.url)
        )
    }

    // 🔐 USER tentando acessar área ADMIN
    if (token && role !== "ADMIN" && isAdminRoute) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    // 👑 ADMIN tentando acessar fora do dashboard
    if (token && role === "ADMIN" && !isAdminRoute) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\..*).*)',
    ],
}