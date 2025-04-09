import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  // Token será undefined se não estiver autenticado
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET || "seu-segredo-de-fallback"
  });
  
  const isAuthRoute = request.nextUrl.pathname.startsWith('/login');
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  // 1. Log da solicitação (exemplo de middleware para logging)
  console.log(`Acesso a ${request.nextUrl.pathname} - Autenticado: ${!!token}`);

  // 2. Redirecionar usuários autenticados que tentam acessar /login
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 3. Proteger rotas /dashboard
  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Configurar em quais caminhos o middleware deve ser executado
export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};