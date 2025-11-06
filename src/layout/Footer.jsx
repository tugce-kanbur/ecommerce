import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    return (
        <div>
            <section className="md:hidden overflow-x-hidden mx-auto w-[414px] h-[1342px] bg-white">
                <div className={`w-[414px] h-[173px] ${isHome ? "bg-[#FAFAFA]" : "bg-white"
                    }`}>
                    <div className="mx-auto py-6 flex absolute left-[44px] w-[325px] h-[160px] pt-12 pb-16 rotate-0 opacity-100">
                        <div className="">
                            <h3 className="font-montserrat font-bold text-[24px] leading-3 text-[#252B42]">
                                Bandage
                            </h3>
                            <div className="flex items-center gap-4 absolute pt-10">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <img src="/src/assets/Vector12.png" alt="fb" className="w-5 h-5" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <img src="/src/assets/Vector13.png" alt="ig" className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <img src="/src/assets/Vector14.png" alt="tw" className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="mx-auto w-[330px] h-px bg-[#E6E6E6]" />
                </div>
                <div className="mx-auto w-[330px] py-8 flex flex-col gap-8">
                    <div>
                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">
                            Company Info
                        </h6>
                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">
                            Legal
                        </h6>
                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">
                            Features
                        </h6>
                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                            <li><a href="#">Business Marketing</a></li>
                            <li><a href="#">User Analytic</a></li>
                            <li><a href="#">Live Chat</a></li>
                            <li><a href="#">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">
                            Resources
                        </h6>
                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                            <li><a href="#">IOS &amp; Android</a></li>
                            <li><a href="#">Watch a Demo</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">
                            Get In Touch
                        </h6>
                        <form className="flex w-[315px]" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                aria-label="Your Email"
                                className="flex-1 h-12 border border-[#E6E6E6] rounded-l-md px-3 text-sm outline-none focus:ring-2 focus:ring-[#23A6F0]/40 focus:border-[#23A6F0]"
                            />
                            <button
                                type="submit"
                                className="w-[117px] h-12 px-5 bg-[#23A6F0] text-white font-semibold rounded-r-md"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 text-xs leading-5 text-[#737373]">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
                <div className="w-full bg-[#FAFAFA]">
                    <div className="mx-auto w-[330px] py-6">
                        <p className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] text-center">
                            Made With Love By <br />Finland All Right Reserved
                        </p>
                    </div>
                </div>
            </section>
            <section className="hidden md:block overflow-x-hidden mx-auto w-full max-w-[1440px] h-[488px] bg-[#FFFFFF]">
                <div className={`relative max-w-[1440px] h-[142px] rotate-0 opacity-100 flex justify-between px-4 ${isHome ? "bg-[#FAFAFA]" : "bg-white"
                    }`}>
                    <div className="relative flex items-center">
                        <div className="px-[190px] flex justify-between gap-[820px]">
                            <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
                                Bandage
                            </h3>
                            <div className="flex items-center gap-5">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/src/assets/Vector12.png" alt="fb" className="w-[20px] h-[20px]" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/src/assets/Vector13.png" alt="ig" className="w-[20px] h-[20px]" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/src/assets/Vector14.png" alt="tw" className="w-[20px] h-[20px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-[1440px] h-[272px] rotate-0 opacity-100 bg-[#FFFFFF]">
                    <div className="mx-auto max-w-[1440px] px-[195px]">
                        <div className="h-px bg-[#E6E6E6]" />
                    </div>
                    <div className="mx-auto max-w-[1440px] px-[195px]">
                        <div className="w-full max-w-[1050px] min-h-[270px] py-[50px]">
                            <div className="w-full max-w-[1050px] py-[1px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
                                    <div>
                                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">Company Info</h6>
                                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                                            <li><a className="hover:text-[#252B42]" href="#">About Us</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Carrier</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">We are hiring</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">Legal</h6>
                                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                                            <li><a className="hover:text-[#252B42]" href="#">About Us</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Carrier</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">We are hiring</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">Features</h6>
                                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                                            <li><a className="hover:text-[#252B42]" href="#">Business Marketing</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">User Analytic</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Live Chat</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Unlimited Support</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">Resources</h6>
                                        <ul className="space-y-3 text-sm leading-6 text-[#737373]">
                                            <li><a className="hover:text-[#252B42]" href="#">IOS & Android</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Watch a Demo</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">Customers</a></li>
                                            <li><a className="hover:text-[#252B42]" href="#">API</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-montserrat font-bold text-base text-[#252B42] mb-4">Get In Touch</h6>
                                        <form className="flex w-full max-w-[330px]" onSubmit={(e) => e.preventDefault()}>
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                aria-label="Your Email"
                                                className="flex-1 h-10 md:h-12 border border-[#E6E6E6] rounded-l-md px-3 text-sm outline-none focus:ring-2 focus:ring-[#23A6F0]/40 focus:border-[#23A6F0]"
                                            />
                                            <button
                                                type="submit"
                                                className="h-10 md:h-12 px-4 md:px-6 bg-[#23A6F0] text-white font-semibold rounded-r-md"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                        <p className="mt-3 text-xs leading-5 text-[#737373]">Lore imp sum dolor Amit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-[1440px] h-[74px] rotate-0 opacity-100 bg-[#FAFAFA]">
                    <div className="ml-[195px] w-[1050px] h-[74px] py-[25px] opacity-100 rotate-0">
                        <p className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                            Made With Love By Finland All Right Reserved
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
