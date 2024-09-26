"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;

               
                Cookies.set('token', token, { expires: 7 });

                console.log("Login successful");
                toast.success("Login successful");
                router.push("/");
            } else {
                console.error("Login failed:", response.statusText);
                alert("Login failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleCreateAccount = () => {
        router.push("/register");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white w-[500px] flex flex-col items-center rounded-md shadow-md">
                <h2 className="text-2xl font-medium pt-[30px] text-gray-900 text-center">
                    Login
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="w-full pt-[46px] pb-[20px] px-[54px] bg-white"
                >
                    <div className="mb-[30px]">
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Your email*"
                            onChange={(e) => setEmail(e.target.value)}
                            className="block text-[16px] w-full px-[20px] py-[10px] border border-gray-300 placeholder-[#555555] focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                            required
                        />
                    </div>
                    <div className="mb-[30px] relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            placeholder="Password*"
                            onChange={(e) => setPassword(e.target.value)}
                            className="block text-[16px] w-full px-[20px] py-[10px] border placeholder-[#555555] border-gray-300 focus:outline-none focus:ring-0 focus:border-black transition-colors duration-300 ease-in-out"
                            required
                        />
                        <button
                            onClick={togglePasswordVisibility}
                            type="button"
                            className="select-none absolute pr-[10px] right-[10px] top-[50%] transform -translate-y-[50%] cursor-pointer"
                        >
                            {showPassword ? "🙉" : "🙈"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-[10px] px-[45px] bg-[#222222] text-[18px] text-white focus:outline-none transition-colors duration-300 ease-in-out">
                        Log in
                    </button>
                </form>

                <div className="flex flex-col gap-[20px] w-full px-[54px] pb-[50px]">
                    <button
                        type="button"
                        onClick={handleCreateAccount}
                        className="w-full py-[10px] px-[45px] border-solid border-[1px] border-black text-[18px] transition-colors duration-300 ease-in-out focus:outline-none hover:bg-[#222222] hover:text-white"
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
}
