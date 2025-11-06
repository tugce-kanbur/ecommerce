import React, { useState, useEffect, useRef } from "react";
import caretDown from "../assets/Vector6.png";
import { Link, NavLink, useLocation } from "react-router-dom";


export default function NavBarLight() {
    const [shopOpen, setShopOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const shopRef = useRef(null);

    const { pathname } = useLocation();
    const isShopPage = pathname.startsWith("/shop") || pathname.startsWith("/product");
    const isInfoPage = ["/about", "/contact", "/team", "/pricing"].some((p) =>
        pathname.startsWith(p)
    );

    useEffect(() => {
        const onClickOutside = (e) => {
            if (shopRef.current && !shopRef.current.contains(e.target)) setShopOpen(false);
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);
    const isAbout = pathname.startsWith("/about");

    return (
        <div className="w-full">
            <div className="md:hidden">
                {isShopPage ? (
                    <div
                        className={`w-full bg-white px-1 flex flex-col items-center text-center pt-4 ${mobileOpen ? "pb-24" : "pb-16"
                            }`}
                    >
                        <div className="w-full flex justify-between px-8 py-4">
                            <Link
                                to="/"
                                className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] px-1"
                            >
                                Bandage
                            </Link>
                            <button
                                onClick={() => setMobileOpen((v) => !v)}
                                aria-label="Open menu"
                                aria-expanded={mobileOpen}
                                className="pr-2"
                            >
                                <div className="w-[24px] h-[22px] px-8 flex flex-col items-end justify-center gap-[4px] text-[#3C403D]">
                                    <span className="block h-[2px] w-[24px] bg-[currentColor] rounded" />
                                    <span className="block h-[2px] w-[16px] bg-[currentColor] rounded" />
                                    <span className="block h-[2px] w-[10px] bg-[currentColor] rounded" />
                                </div>
                            </button>
                        </div>
                        {mobileOpen && (
                            <nav className="bg-white">
                                <ul className="max-w-[1050px] mx-auto px-4 py-3 flex flex-col items-center justify-center text-[30px]">
                                    <li>
                                        <NavLink to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-[#252B42] font-normal">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/shop" onClick={() => setMobileOpen(false)} className="block py-3 text-[#737373] font-light">
                                            Product
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/pricing" onClick={() => setMobileOpen(false)} className="block py-3 text-[#737373] font-light">
                                            Pricing
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-[#252B42] font-light">
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/pages" onClick={() => setMobileOpen(false)} className="block py-3 text-[#252B42] font-light">
                                            Pages
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        )}

                        <Link
                            to="/login"
                            className="flex items-center justify-center gap-2 text-[#23A6F0] text-[25px] mt-6 w-[310px] h-[75px]"
                        >
                            <img src="/src/assets/Vector7.png" alt="login" className="w-4 h-4" />
                            Login / Register
                        </Link>

                        <div className="flex flex-col gap-5 mt-6 items-center justify-center">
                            <Link to="/search">
                                <img src="/src/assets/Vector8.png" alt="search" className="w-5 h-5" />
                            </Link>
                            <div className="relative">
                                <Link to="/cart">
                                    <img src="/src/assets/Vector9.png" alt="cart" className="w-5 h-5" />
                                </Link>
                                <span className="absolute -top-2 -right-2 text-[#23A6F0] text-[10px] font-semibold">1</span>
                            </div>
                            <div className="relative">
                                <Link to="/wishlist">
                                    <img src="/src/assets/Vector10.png" alt="wishlist" className="w-5 h-5" />
                                </Link>
                                <span className="absolute -top-2 -right-2 text-[#23A6F0] text-[10px] font-semibold">1</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {isAbout ? (
                            <div className="mx-auto w-[414px] h-auto bg-[#F6F6F6]">
                                <div className="w-full flex justify-between px-14 py-4">
                                    <Link
                                        to="/"
                                        className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]"
                                    >
                                        Bandage
                                    </Link>

                                    <div className="flex items-center gap-6">
                                        <Link to="/search" className="grid place-items-center w-6 h-6">
                                            <img src="/src/assets/Vector82.png" alt="search" className="w-[23px] h-[23px]" />
                                        </Link>
                                        <Link to="/cart" className="grid place-items-center w-6 h-6">
                                            <img src="/src/assets/Vector92.png" alt="cart" className="w-[24px] h-[22px]" />
                                        </Link>
                                        <button
                                            onClick={() => setMobileOpen((v) => !v)}
                                            aria-label="Open menu"
                                            className="grid place-items-center w-6 h-6"
                                        >
                                            <div className="w-[24px] h-[22px] px-8 flex flex-col items-end justify-center gap-[4px] text-[#3C403D]">
                                                <span className="block h-[2px] w-[24px] bg-[currentColor] rounded" />
                                                <span className="block h-[2px] w-[16px] bg-[currentColor] rounded" />
                                                <span className="block h-[2px] w-[10px] bg-[currentColor] rounded" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                {mobileOpen && (
                                    <nav className="w-[414px] bg-[#F6F6F6] mx-auto py-6">
                                        <ul className="flex flex-col items-center gap-8">
                                            <li><NavLink to="/" onClick={() => setMobileOpen(false)} className="text-[28px] text-[#737373] font-montserrat">Home</NavLink></li>
                                            <li><NavLink to="/shop" onClick={() => setMobileOpen(false)} className="text-[28px] text-[#737373] font-bold font-montserrat">Product</NavLink></li>
                                            <li><NavLink to="/pricing" onClick={() => setMobileOpen(false)} className="text-[28px] text-[#737373] font-bold font-montserrat">Pricing</NavLink></li>
                                            <li><NavLink to="/contact" onClick={() => setMobileOpen(false)} className="text-[28px] text-[#737373] font-bold font-montserrat">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                )}
                            </div>
                        ) : (
                            <div className="max-w-[1050px] mx-auto px-4 h-14 flex items-center justify-between">
                                <Link
                                    to="/"
                                    className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] w-[108px] h-[32px] absolute top-[13px] left-[27px]"
                                >
                                    Bandage
                                </Link>

                                <nav className="flex items-center gap-[15px] absolute top-[25px] left-[210px] h-[24px]">
                                    <div className="flex items-center gap-4">
                                        <Link to="/login" className="text-xl">
                                            <img
                                                src="/src/assets/Vector72.png"
                                                alt="login"
                                                className="w-[21px] h-[22px]"
                                            />
                                        </Link>
                                        <Link to="/search" className="text-xl">
                                            <img
                                                src="/src/assets/Vector82.png"
                                                alt="search"
                                                className="w-[23px] h-[23px]"
                                            />
                                        </Link>
                                        <Link to="/cart" className="text-xl">
                                            <img
                                                src="/src/assets/Vector92.png"
                                                alt="cart"
                                                className="w-[24px] h-[22px]"
                                            />
                                        </Link>

                                        <button
                                            onClick={() => setMobileOpen((v) => !v)}
                                            aria-label="Open menu"
                                            className="ml-1"
                                        >
                                            <div className="w-[24px] h-[22px] flex flex-col items-end justify-center gap-[4px] text-[#3C403D]">
                                                <span className="block h-[2px] w-[24px] bg-current rounded" />
                                                <span className="block h-[2px] w-[16px] bg-current rounded" />
                                                <span className="block h-[2px] w-[10px] bg-current rounded" />
                                            </div>
                                        </button>
                                    </div>
                                </nav>
                                {mobileOpen && (
                                    <nav className="border-t bg-white w-full">
                                        <ul className="max-w-[1050px] mx-auto px-4 py-3 flex flex-col text-[#737373] items-center justify-center text-[30px]">
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-3 font-light"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/shop"
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-3 font-normal"
                                                >
                                                    Product
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/pricing"
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-3 font-normal"
                                                >
                                                    Pricing
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/contact"
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-3 font-normal"
                                                >
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
            <div
                className={`hidden md:block ${(isShopPage || isInfoPage) ? "w-full max-w-[1440px] mx-auto px-[181px]" : ""
                    }`}
            >
                {isInfoPage ? (
                    <div className="h-[78px] bg-white flex items-center">
                        <div className="w-full grid grid-cols-[auto_1fr_auto] items-center">
                            <Link
                                to="/"
                                className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42]"
                            >
                                Bandage
                            </Link>
                            <nav className="justify-self-center flex items-center gap-8 font-montserrat leading-[32px] tracking-[0.1px]">
                                <NavLink to="/" className="text-[#737373] font-bold hover:text-[#252B42] transition">Home</NavLink>
                                <NavLink to="/shop" className="text-[#737373] font-bold hover:text-[#252B42] transition">Product</NavLink>
                                <NavLink to="/pricing" className="text-[#737373] font-bold hover:text-[#252B42] transition">Pricing</NavLink>
                                <NavLink to="/contact" className="text-[#737373] font-bold hover:text-[#252B42] transition">Contact</NavLink>
                            </nav>
                            <div className="justify-self-end flex items-center gap-8">
                                <Link to="/login" className="text-[#23A6F0] font-montserrat font-bold">Login</Link>
                                <Link
                                    to="/signup"
                                    className="bg-[#23A6F0] text-white rounded-md px-5 py-3 font-montserrat font-bold flex items-center gap-2 hover:opacity-90 transition"
                                >
                                    Become a member <span aria-hidden>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-[1440px] mx-auto h-[78px] px-6 bg-[#FFFFFF] flex items-center justify-between">
                        <Link
                            to="/"
                            className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]"
                        >
                            Bandage
                        </Link>

                        <nav className="flex items-center gap-8 font-montserrat leading-[32px] tracking-[0.1px]">
                            <NavLink to="/" className="text-[#737373] hover:text-[#252B42] transition">
                                Home
                            </NavLink>

                            <div className="relative" ref={shopRef}>
                                <button
                                    className="flex items-center gap-1 text-[#737373] hover:text-[#252B42] transition"
                                    onClick={() => setShopOpen((prev) => !prev)}
                                    aria-haspopup="menu"
                                    aria-expanded={shopOpen}
                                >
                                    Shop <img src={caretDown} alt="" className="w-2 h-2" />
                                </button>

                                {shopOpen && (
                                    <div
                                        role="menu"
                                        className="absolute left-0 top-full mt-2 w-[420px] bg-white border shadow-md rounded-md p-6 grid grid-cols-2 gap-6 z-30"
                                    >
                                        <div>
                                            <h4 className="font-semibold text-[#252B42] mb-3">Kadın</h4>
                                            <ul className="space-y-2 text-[14px] text-[#737373]">
                                                <li className="hover:text-[#252B42] cursor-pointer">Bags</li>
                                                <li className="hover:text-[#252B42] cursor-pointer">Belts</li>
                                                <li className="hover:text-[#252B42] cursor-pointer">Cosmetics</li>
                                                <li className="hover:text-[#252B42] cursor-pointer">Hats</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#252B42] mb-3">Erkek</h4>
                                            <ul className="space-y-2 text-[14px] text-[#737373]">
                                                <li className="hover:text-[#252B42] cursor-pointer">Bags</li>
                                                <li className="hover:text-[#252B42] cursor-pointer">Belts</li>
                                                <li className="hover:text-[#252B42] cursor-pointer">Cosmetics</li>
                                                <li className="hover:text-[#252B42] cursor-pointer">Hats</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <NavLink to="/about" className="text-[#737373] hover:text-[#252B42] transition">
                                About
                            </NavLink>
                            <NavLink to="/blog" className="text-[#737373] hover:text-[#252B42] transition">
                                Blog
                            </NavLink>
                            <NavLink to="/contact" className="text-[#737373] hover:text-[#252B42] transition">
                                Contact
                            </NavLink>
                            <NavLink to="/pages" className="text-[#737373] hover:text-[#252B42] transition">
                                Pages
                            </NavLink>
                        </nav>

                        <div className="flex items-center gap-6">
                            <Link to="/login" className="flex items-center gap-2 whitespace-nowrap text-[#23A6F0]">
                                <img src="/src/assets/Vector7.png" alt="login" className="w-4 h-4" />
                                <span className="hidden sm:inline">Login / Register</span>
                            </Link>
                            <Link to="/search">
                                <img src="/src/assets/Vector8.png" alt="search" className="w-4 h-4" />
                            </Link>
                            <div className="relative">
                                <Link to="/cart">
                                    <img src="/src/assets/Vector9.png" alt="cart" className="w-4 h-4" />
                                </Link>
                                <span className="absolute -top-1 -right-2 text-[#23A6F0] text-s">1</span>
                            </div>
                            <div className="relative">
                                <Link to="/wishlist">
                                    <img src="/src/assets/Vector10.png" alt="wishlist" className="w-4 h-4" />
                                </Link>
                                <span className="absolute -top-1 -right-2 text-[#23A6F0] text-s">1</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
