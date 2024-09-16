"use client";
import { usePathname } from 'next/navigation';
import Header from '../header';
import Footer from '../footer';
import GoUpButton from '@/components/GoUpButton';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');

    return (
        <main>
            {!isAdminPage && <Header />}
            {children}
            {!isAdminPage && <Footer />}
            {!isAdminPage && <GoUpButton />}
        </main>
    );
};

export default Layout;
