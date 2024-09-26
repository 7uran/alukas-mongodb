import { LoginModalProps } from '@/types/types';
import React from 'react';


const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const handleLogout = () => {

        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        onClose();
        window.location.reload();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                <h2 className="text-2xl mb-4">Log Out</h2>
                <p>Are you sure want to logout?</p>
                <button
                    className="hover:bg-black transition hover:text-white py-2 px-4 rounded-sm border-black border"
                    onClick={handleLogout}
                >
                    Log Out
                </button>
                <button
                    className=" py-2 px-4 rounded mt-4"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
