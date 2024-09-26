"use client";
import { usePathname, useRouter } from 'next/navigation';
import Header from '../header';
import Footer from '../footer';
import GoUpButton from '@/components/GoUpButton';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isAdminPage = pathname.startsWith('/admin');
    const loginPage = pathname.startsWith('/login');
    const registerPage = pathname.startsWith('/register');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthToken = () => {
            const token = document.cookie.split('; ').find(row => row.startsWith('token='));
            return token ? true : false;
        };

        const tokenExists = checkAuthToken();

        if (!tokenExists && !loginPage && !registerPage) {
            router.push('/login');
        }
        else if (tokenExists && (loginPage || registerPage)) {
            router.push('/home');
        }


        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [loginPage, registerPage, router]);


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
