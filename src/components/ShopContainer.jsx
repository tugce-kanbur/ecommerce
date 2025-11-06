
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ShopContainer() {
    const { pathname } = useLocation();
    const isShopPage = pathname.startsWith("/shop");
    const isProductDetail = pathname.startsWith("/product");
    const arrow = new URL("../assets/arrow.png", import.meta.url).href;

    if (!isShopPage && !isProductDetail) return null;

    return (
        <>
            <section className="md:hidden w-full bg-[#FAFAFA] py-6">
                <div className="w-full max-w-[414px] mx-auto flex flex-col items-center gap-6">
                    {isShopPage && (
                        <h1 className="text-[#252B42] font-montserrat font-bold text-[32px] leading-[48px]">
                            Shop
                        </h1>
                    )}
                    <nav
                        className="flex items-center gap-2 text-[14px] leading-[24px] tracking-[0.2px] font-montserrat font-bold"
                        aria-label="Breadcrumb"
                    >
                        <Link to="/" className="text-[#252B42]">Home</Link>
                        <img src={arrow} alt="" className="w-[9px] h-[16px]" />
                        <Link to="/shop" className="text-[#BDBDBD] hover:text-[#252B42]">Shop</Link>
                    </nav>
                </div>
            </section>
            <section className={`hidden md:block w-full max-w-[1440px] mx-auto ${isProductDetail ? "bg-[#FAFAFA]" : "bg-white"}`}>
                {isProductDetail ? (
                    <div className="h-[92px] flex items-center">
                        <div className="w-full max-w-[1440px] mx-auto px-[181px]">
                            <nav
                                className="flex items-center gap-2 text-[14px] font-montserrat font-bold"
                                aria-label="Breadcrumb"
                            >
                                <Link to="/" className="text-[#252B42] hover:text-[#252B42]">Home</Link>
                                <img src={arrow} alt="" className="w-[9px] h-[16px]" />
                                <Link to="/shop" className="text-[#737373]">Shop</Link>
                            </nav>
                        </div>
                    </div>
                ) : (
                    <div className="h-[92px] flex items-center">
                        <div className="w-[1050px] mx-auto flex items-center justify-between">
                            <h1 className="text-[#252B42] font-montserrat font-bold text-[24px] leading-[32px]">
                                Shop
                            </h1>
                            <nav
                                className="flex items-center gap-2 text-[14px] font-montserrat font-bold"
                                aria-label="Breadcrumb"
                            >
                                <Link to="/" className="text-[#252B42]">Home</Link>
                                <img src={arrow} alt="" className="w-[9px] h-[16px]" />
                                <span className="text-[#BDBDBD]">Shop</span>
                            </nav>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
