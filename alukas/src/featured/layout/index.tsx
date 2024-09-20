"use client";
import { usePathname } from 'next/navigation';
import Header from '../header';
import Footer from '../footer';
import GoUpButton from '@/components/GoUpButton';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');
    const loginPage = pathname.startsWith('/login');
    const registerPage = pathname.startsWith('/register');
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
