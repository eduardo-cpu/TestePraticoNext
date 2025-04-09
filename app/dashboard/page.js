import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession();
  
  // Verificação adicional de segurança (o middleware já deve ter lidado com isso)
  if (!session) {
    redirect("/login");
  }

  // Dados de exemplo para o dashboard
  const estatisticas = [
    { titulo: "Visitantes hoje", valor: "1,248", percentual: "+12%", tendencia: "up" },
    { titulo: "Novos usuários", valor: "384", percentual: "+4%", tendencia: "up" },
    { titulo: "Tempo médio", valor: "3m 42s", percentual: "-2%", tendencia: "down" },
    { titulo: "Taxa de rejeição", valor: "24.8%", percentual: "-8%", tendencia: "down" },
  ];

  const tarefasPendentes = [
    { id: 1, titulo: "Revisar relatório mensal", prioridade: "alta", prazo: "Hoje" },
    { id: 2, titulo: "Preparar apresentação para clientes", prioridade: "média", prazo: "Amanhã" },
    { id: 3, titulo: "Reunião com equipe de desenvolvimento", prioridade: "alta", prazo: "10/04/2025" },
    { id: 4, titulo: "Atualizar documentação do projeto", prioridade: "baixa", prazo: "15/04/2025" },
  ];

  const notificacoes = [
    { id: 1, tipo: "mensagem", conteudo: "Nova mensagem de Maria Silva", tempo: "5 min atrás" },
    { id: 2, tipo: "alerta", conteudo: "Seu relatório foi aprovado", tempo: "2 horas atrás" },
    { id: 3, tipo: "info", conteudo: "Manutenção programada para 12/04", tempo: "1 dia atrás" },
  ];

  const atividadesRecentes = [
    { id: 1, usuario: "Você", acao: "criou um novo projeto", tempo: "Agora" },
    { id: 2, usuario: "Carlos Torres", acao: "comentou no seu relatório", tempo: "2h atrás" },
    { id: 3, usuario: "Sistema", acao: "backup automático concluído", tempo: "6h atrás" },
    { id: 4, usuario: "Ana Ferreira", acao: "compartilhou um documento", tempo: "1d atrás" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho do Dashboard */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Bem-vindo de volta, {session.user.name}</p>
          </div>
          <div className="bg-white p-3 rounded-full shadow-sm">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Online
            </span>
          </div>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {estatisticas.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{stat.titulo}</p>
                  <h3 className="text-3xl font-bold mt-2 mb-1">{stat.valor}</h3>
                  <span className={`text-sm font-medium ${
                    stat.tendencia === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.percentual} desde ontem
                  </span>
                </div>
                <div className={`p-2 rounded-full ${
                  stat.tendencia === "up" ? "bg-green-100" : "bg-red-100"
                }`}>
                  {stat.tendencia === "up" ? (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Gráfico + Links Rápidos */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gráfico de Atividade */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Atividade Mensal</h2>
                <div className="bg-gray-100 rounded-lg px-3 py-1">
                  <select className="bg-transparent text-sm text-gray-600 focus:outline-none">
                    <option>Últimos 30 dias</option>
                    <option>Últimos 60 dias</option>
                    <option>Este ano</option>
                  </select>
                </div>
              </div>
              {/* Aqui entraria um componente de gráfico real */}
              <div className="h-64 w-full bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Gráfico de atividades<br />
                  (Visualização de exemplo)
                </p>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Projetos", "Equipes", "Calendário", "Relatórios"].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <div className="mb-3 p-2 bg-blue-100 rounded-lg inline-block">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium">{item}</h3>
                </div>
              ))}
            </div>

            {/* Tarefas Pendentes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold">Tarefas Pendentes</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver todas</button>
              </div>
              <div className="space-y-3">
                {tarefasPendentes.map(tarefa => (
                  <div key={tarefa.id} className="flex items-center justify-between border-b border-gray-100 py-3">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded mr-3" />
                      <div>
                        <p className="font-medium">{tarefa.titulo}</p>
                        <p className="text-sm text-gray-500">Prazo: {tarefa.prazo}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      tarefa.prioridade === 'alta' ? 'bg-red-100 text-red-800' :
                      tarefa.prioridade === 'média' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {tarefa.prioridade.charAt(0).toUpperCase() + tarefa.prioridade.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2 - Perfil + Notificações + Atividades */}
          <div className="space-y-8">
            {/* Perfil do Usuário */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-4">
                <div className="inline-block relative mb-4">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
                </div>
                <h2 className="text-xl font-semibold">{session.user.name}</h2>
                <p className="text-gray-600">{session.user.email}</p>
                <p className="text-sm text-gray-500 mt-1">Função: {session.user.role || "Usuário"}</p>
              </div>
              <div className="border-t border-gray-100 pt-4 text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                  Editar Perfil
                </button>
              </div>
            </div>

            {/* Notificações */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-5">Notificações</h2>
              <div className="space-y-4">
                {notificacoes.map(notif => (
                  <div key={notif.id} className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <div className={`p-2 rounded-full ${
                      notif.tipo === 'mensagem' ? 'bg-blue-100' : 
                      notif.tipo === 'alerta' ? 'bg-yellow-100' : 
                      'bg-gray-100'
                    } mt-1`}>
                      <svg className={`w-4 h-4 ${
                        notif.tipo === 'mensagem' ? 'text-blue-600' : 
                        notif.tipo === 'alerta' ? 'text-yellow-600' : 
                        'text-gray-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notif.conteudo}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.tempo}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                Ver todas as notificações
              </button>
            </div>

            {/* Atividades Recentes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-5">Atividades Recentes</h2>
              <div className="space-y-4">
                {atividadesRecentes.map((atividade) => (
                  <div key={atividade.id} className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{atividade.usuario}</span> {atividade.acao}
                      </p>
                      <span className="text-xs text-gray-500">{atividade.tempo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé do Dashboard */}
        <div className="text-center text-sm text-gray-500 pt-4 pb-8">
          <p>© 2025 Sua Empresa. Todos os direitos reservados.</p>
          <p className="mt-1">Versão 1.0.0</p>
        </div>
      </div>
    </div>
  );
}