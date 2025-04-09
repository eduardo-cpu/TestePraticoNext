import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Usuários mockados com senha simples (para desenvolvimento)
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "senha123", // senha em texto simples para desenvolvimento
    role: "admin",
  },
  {
    id: "2",
    name: "Normal User",
    email: "user@example.com",
    password: "senha123", // senha em texto simples para desenvolvimento
    role: "user",
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = users.find((user) => user.email === credentials.email);

        if (!user) {
          return null;
        }

        // Comparação simples para desenvolvimento
        const passwordMatch = credentials.password === user.password;

        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };