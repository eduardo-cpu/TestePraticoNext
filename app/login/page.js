import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import LoginForm from "../../components/LoginForm";

export default async function LoginPage() {
  // Verifica se o usuário já está autenticado
  const session = await getServerSession();
  
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Portal de Acesso</h1>
        <p className="text-gray-600">Entre com suas credenciais para acessar o sistema</p>
      </div>
      
      <LoginForm />
      
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Meu Projeto Next.Js. Eduardo Santos de Paula Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}