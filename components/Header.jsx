"use client";

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    
    const handleLogout = async () => {
        await signOut({ redirect: true, callbackUrl: '/' });
    };

    return (
        <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 shadow-md">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/" className="px-4 py-2 rounded-lg bg-white text-blue-700 transition-all duration-200 font-medium hover:shadow-lg hover:bg-blue-100">
                    Home
                </Link>
                
                {session ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-white">Olá, {session.user.name}</span>
                        <button 
                            onClick={handleLogout} 
                            className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all duration-200 hover:shadow-lg"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link href="/login" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-all duration-200 hover:shadow-lg">
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;