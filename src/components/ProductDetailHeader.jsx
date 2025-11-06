
import React from "react";
import product1 from "../assets/productdetail1.jpg";

export default function ProductDetailHeader() {
    return (
        <section className="hidden md:block w-full max-w-[1440px] mx-auto bg-[#FAFAFA] py-[24px]">
            <div className="w-[1050px] mx-auto flex gap-[30px] h-[550px]">
                <div className="w-[506px] h-[450px] bg-white">
                    <img src={product1} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 h-full bg-[#FAFAFA]" />
            </div>
        </section>
    );
}
