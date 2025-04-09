import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import { AuthProvider } from './providers';

export const metadata = {
  title: 'Next App Example',
  description: 'A Next.js application example with multiple features.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}