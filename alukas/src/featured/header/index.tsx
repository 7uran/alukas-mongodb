"use client"
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { navbarItems } from '@/static/mockdb';
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const Header = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 170) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`transition-all bg-white  ${isScrolled ? 'header-animated -translate-y-10 sticky top-0 left-0 w-full z-50  shadow-md' : ''}`}>
            <div className='bg-[#222222] hidden md:flex py-2'>
                <div className='flex justify-between max-w-[1360px] w-full mx-auto'>
                    <div className='flex text-white gap-4'>
                        <div className='cursor-pointer'>
                            <select className='bg-transparent w-20 flex items-center'>
                                <option className='text-black'>English</option>
                                <option className='text-black'>Azərbaycan</option>
                                <option className='text-black'>Русский</option>
                            </select>
                        </div>
                        <div className='cursor-pointer'>
                            <select className='bg-transparent w-fit flex items-center'>
                                <option className='text-black'>United States (USD $)</option>
                                <option className='text-black'>France (USD $)</option>
                            </select>
                        </div>
                        <div className='cursor-pointer'>
                            <p>Summer Sale 15% off! <span className='underline'>Shop Now!</span></p>
                        </div>
                    </div>
                    <div className='flex text-white gap-5'>
                        <p>Store Location</p>
                        <p>Contact</p>
                        <p>About</p>
                        <p>Gift Cards</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[1360px] w-full mx-auto flex md:flex-row flex-col items-center justify-between'>
                <div className='flex items-center py-6'>
                    <input className='border-gray-300 border px-6 w-full  md:w-[288px] h-[45px] placeholder-gray-700' placeholder='Search Products' />
                    <IoIosSearch className='text-2xl translate-x-[-35px]' />
                </div>
                <div className='mr-[13%]'>
                    <svg width="210" height="27" viewBox="0 0 210 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg width="210" height="27" viewBox="0 0 210 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.152 26H22.104L11.34 0.835998L0.288 26H3.24L6.12 19.232H16.344L19.152 26ZM7.164 16.712L11.268 7.1L15.3 16.712H7.164ZM25.4905 1.988V26H34.7785V23.48H28.1545V1.988H25.4905ZM41.0569 1.988H38.3929V17.432C38.3929 19.448 38.6089 21.392 39.9049 23.192C41.3449 25.172 43.8649 26.432 46.9249 26.432C49.9849 26.432 52.5049 25.172 53.9449 23.192C55.2409 21.392 55.4569 19.448 55.4569 17.432V1.988H52.7929V16.712C52.7929 18.728 52.7929 20.924 50.8849 22.544C49.9129 23.372 48.2569 23.912 46.9249 23.912C45.5929 23.912 43.9369 23.372 42.9649 22.544C41.0569 20.924 41.0569 18.728 41.0569 16.712V1.988ZM64.3303 1.988H61.6663V26H64.3303V15.668L65.0143 14.984L74.8423 26H78.5143L66.9223 13.184L78.1543 1.988H74.5543L64.3303 12.284V1.988ZM98.1833 26H101.135L90.3713 0.835998L79.3193 26H82.2713L85.1513 19.232H95.3753L98.1833 26ZM86.1953 16.712L90.2993 7.1L94.3313 16.712H86.1953ZM116.987 5.336C116.447 4.292 115.619 3.32 114.647 2.672C113.459 1.88 112.271 1.592 110.795 1.592C106.907 1.592 104.063 4.076 104.063 7.784C104.063 9.584 104.675 10.7 105.719 11.708C106.799 12.752 107.987 13.256 108.923 13.688L111.083 14.696C112.343 15.272 113.279 15.704 113.963 16.352C114.827 17.144 115.151 18.08 115.151 19.16C115.151 21.572 113.603 23.912 110.327 23.912C109.103 23.912 107.915 23.624 106.871 22.58C106.187 21.86 105.611 20.78 105.431 19.52L102.839 20.24C103.163 21.68 103.883 23.336 105.071 24.488C106.727 26.108 108.707 26.432 110.291 26.432C114.611 26.432 117.887 23.48 117.887 19.052C117.887 17.324 117.383 15.92 116.159 14.696C115.151 13.688 113.855 13.04 112.451 12.428L110.147 11.42C109.247 11.024 108.347 10.628 107.627 9.908C106.979 9.296 106.727 8.756 106.727 7.82C106.727 5.588 108.383 4.112 110.759 4.112C112.127 4.112 112.991 4.58 113.459 4.94C113.999 5.372 114.539 6.092 114.863 6.74L116.987 5.336ZM147.694 15.596C147.01 16.532 146.254 17.396 144.958 18.764L139.954 12.32C141.502 11.024 141.286 11.312 141.898 10.772C143.806 9.116 144.13 7.532 144.13 6.416C144.13 4.004 142.402 1.592 139.054 1.592C135.598 1.592 133.834 4.148 133.834 6.668C133.834 8.288 134.59 9.728 136.21 11.816C135.706 12.14 133.438 13.544 132.178 14.804C131.386 15.596 130.018 17.18 130.018 19.772C130.018 23.588 133.042 26.432 136.966 26.432C139.702 26.432 142.618 24.74 144.706 22.652L147.298 26H150.61L146.578 20.78C148.054 19.268 148.99 18.116 149.638 17.216L147.694 15.596ZM143.086 20.672C142.186 21.536 139.486 23.984 136.93 23.984C134.446 23.984 132.682 22.112 132.682 19.736C132.682 17.864 133.69 16.892 134.374 16.28C135.058 15.668 135.994 14.876 137.758 13.796L143.086 20.672ZM137.326 8.9C136.858 8.252 136.354 7.568 136.354 6.524C136.354 5.012 137.542 3.896 139.018 3.896C140.278 3.896 141.61 4.688 141.61 6.38C141.61 7.208 141.358 8.072 139.99 9.152L138.406 10.376L137.326 8.9ZM180.819 3.968C177.939 1.772 175.167 1.592 173.727 1.592C166.527 1.592 161.163 6.92 161.163 14.084C161.163 21.032 166.455 26.432 173.583 26.432C175.383 26.432 178.155 26 180.819 24.092V20.78C180.387 21.212 179.415 22.112 178.047 22.796C176.787 23.444 175.203 23.912 173.583 23.912C169.191 23.912 163.899 20.636 163.899 14.12C163.899 8.576 168.003 4.112 173.547 4.112C174.951 4.112 176.427 4.472 177.687 5.048C178.911 5.624 180.063 6.524 180.819 7.28V3.968ZM196.929 26.432C203.877 26.432 209.421 21.14 209.421 14.012C209.421 6.848 203.841 1.592 196.929 1.592C190.017 1.592 184.437 6.848 184.437 14.012C184.437 21.14 189.981 26.432 196.929 26.432ZM196.929 4.112C202.329 4.112 206.685 8.504 206.685 14.012C206.685 19.52 202.329 23.912 196.929 23.912C191.529 23.912 187.173 19.52 187.173 14.012C187.173 8.504 191.529 4.112 196.929 4.112Z" fill="#222222"></path> </svg>
                    </svg>
                </div>
                <div className='hidden md:flex text-3xl gap-4'>
                    <div className='relative group'>
                        <CiUser />
                        <span className='absolute left-1/2 transform -translate-x-1/2  w-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm rounded-sm py-1 px-2'>Log in</span>
                    </div>
                    <div className='relative group w-9'>
                        <CiHeart />
                        <div className='bg-black absolute top-0 right-0 text-white rounded-full flex items-center justify-center w-4 h-4'>
                            <p className='text-xs'>0</p>
                        </div>
                        <span className='absolute left-1/2 transform -translate-x-1/2 text-sm   w-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black text-white  rounded-sm py-1 px-2'>Wishlist</span>
                    </div>
                    <div className='relative group w-9'>
                        <IoCartOutline />
                        <div className='bg-black absolute top-0 right-0 text-white rounded-full flex items-center justify-center w-4 h-4'>
                            <p className='text-xs'>0</p>
                        </div>
                        <span className=' absolute left-1/2 transform -translate-x-1/2  w-16 flex items-center justify-center text- translate-y-0 opacity-0 group-hover:opacity-100 transition bg-black text-sm text-white  rounded-sm   py-1 px-2'>Cart</span>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='border-y'>
                    <div className='max-w-[1360px] w-full mx-auto hidden md:flex items-center justify-between'>
                        <div className="dropdown relative w-[319px]">
                            <button className={`btn flex items-center px-6 gap-2  w-full border-0 h-[54px] ${isOpenDropdown ? "bg-black text-white" : "bg-white text-black"} transition duration-300 font-medium `} onClick={() => setIsOpenDropdown(!isOpenDropdown)}>BROWSE CATEGORIES<IoIosArrowUp className={`transition ${isOpenDropdown ? "rotate-0" : "rotate-180"}`} />
                            </button>
                            {
                                isOpenDropdown &&
                                <ul className={`text-sm w-[319px] bg-white ${isOpenDropdown ? "opacity-100" : "opacity-0"} transition duration-300 absolute z-[1] menu dropdown-content rounded-box  `}>
                                    <li className='px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>New Products</li>
                                    <li className='border-y px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Top On Sale</li>
                                    <li className='border-y px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Special Offer!</li>
                                    <li className='border-y px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Necklaces</li>
                                    <li className='border-y px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Rings</li>
                                    <li className='border-y px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Bracelets</li>
                                    <li className='border-y px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Earnings</li>
                                    <li className=' px-6 py-3 hover:bg-gray-100 transition cursor-pointer'>Charm & Dangles</li>
                                </ul>
                            }

                        </div>
                        <div className='flex gap-8'>
                            {
                                navbarItems && navbarItems.map((item, index) => (
                                    <div key={index} className='group flex items-center cursor-pointer text-sm'>
                                        <p className='uppercase flex flex-col items-start font-medium'>
                                            {item.label}
                                            <span className='h-[3px] w-0 transition-all duration-300 group-hover:w-full bg-black'></span>
                                        </p>
                                        <IoIosArrowDown />
                                    </div>
                                ))
                            }



                        </div>
                        <div className='flex items-center gap-4 text-lg ml-[13%] '>
                            <div>
                                <p className='flex items-center'><LuPhone />(+800) 1234 56</p>
                            </div>
                            <div>
                                <p className='flex items-center'><MdOutlineLocationOn />Our Stores</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;


