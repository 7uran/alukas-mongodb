"use client";
import { usePathname } from 'next/navigation';
import Header from '../header';
import Footer from '../footer';
import GoUpButton from '@/components/GoUpButton';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');
    const loginPage = pathname.startsWith('/login');
    const registerPage = pathname.startsWith('/register');

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <main>
            {!isAdminPage && !loginPage && !registerPage && <Header />}
            {children}
            {!isAdminPage && !loginPage && !registerPage && <Footer />}
            {!isAdminPage && !loginPage && !registerPage && <GoUpButton />}
        </main>
    );
};

export default Layout;
