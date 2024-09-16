import { features } from '@/static/mockdb'
import Image from 'next/image'
import React from 'react'
import { FiHeadphones } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='mt-10 md:block hidden'>
            <div className='bg-[#F5F5F5]'>
                <div className='max-w-[1360px] w-full  mx-auto flex gap-8 justify-center flex-col items-center py-16'>
                    <div className='flex items-center justify-center flex-col'>
                        <h2 className="text-[40px]">Subscribe Newsletter</h2>
                        <p className='text-[20px] text-gray-600'>Sign up to our Newsletter and get the discount code.</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input className='w-[505px] h-[47px] py-2 px-4 placeholder-gray-600 border-2 border-black bg-transparent' placeholder='Your email address...' />
                        <button className='uppercase bg-black text-white h-[47px] px-10 font-medium'>subscribe</button>
                    </div>

                </div>
            </div>
            <div className='max-w-[1360px] w-full mx-auto flex justify-around py-10'>
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center flex-col">
                        <Image alt={feature.title} width={38} height={38} src={feature.image} />
                        <p className="text-[18px]">{feature.title}</p>
                        <span className="text-[16px] text-gray-600">{feature.description}</span>
                    </div>
                ))}
            </div>
            <div className='border-y-[2px] py-20'>
                <div className='max-w-[1360px] w-full mx-auto flex justify-between '>
                    <div className='flex flex-col gap-2'>
                        <Image width={175} height={21} alt='' src={"https://demo-alukas.myshopify.com/cdn/shop/files/alk_logo_footer.png?v=1714702294"} />
                        <p>Gold & Diomonds</p>
                    </div>
                    <div>
                        <p className='font-medium mb-5 text-lg'>
                            About Alukas
                        </p>
                        <ul className='text-[16px] flex flex-col gap-2 text-gray-600'>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                About Us
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Core Values
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Careers
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Press Releases
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Blog
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Sitemap
                            </li>

                        </ul>
                    </div>
                    <div>
                        <p className='font-medium mb-5 text-lg'>
                            Our Company
                        </p>
                        <ul className='text-[16px] flex flex-col gap-2 text-gray-600'>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Shopping App
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Be an Affiliate
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Advertise Your Product
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Media Enquires
                            </li>
                            <li className='hover:translate-x-3 transition duration-300 cursor-pointer'>
                                Other Services
                            </li>

                        </ul>
                    </div>
                    <div className='flex gap-6 flex-col'>
                        <p className='text-lg font-medium'>Store Details</p>
                        <div className='flex gap-3 flex-col w-64'>
                            <div className='flex gap-5'>
                                <div className='text-4xl bg-[#C6C6C6] text-white w-12 h-12 flex items-center justify-center rounded-full'><FiHeadphones />
                                </div>
                                <div>
                                    <span className='text-gray-600'>Need Any Help?</span>
                                    <p className='text-2xl'>(+800) 1234 56</p>
                                </div>
                            </div>

                            <div className='text-gray-600'>
                                <p>Address: 502 New Design Str, Melbourne, Australia</p>
                            </div>
                            <div className='text-gray-600'>
                                <p>Email: alukas@domain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='gap-6 flex flex-col'>
                        <p className='text-lg font-medium'>Follow Us</p>
                        <div className='flex gap-5 text-xl'><FaInstagram /><FaTiktok />
                            <FaYoutube /><FaXTwitter /><FaFacebookF />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 py-6'>
                <Image width={189} height={189} alt='' src={"https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031"} />
                <p>Copyright © Alukas all rights reserved. Powered by Bersky.</p>
            </div>

        </footer>
    )
}

export default Footer