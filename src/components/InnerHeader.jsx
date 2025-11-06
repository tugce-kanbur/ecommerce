import React from "react";
import { Link } from "react-router-dom";

export default function InnerHeader({ type = "pricing" }) {
    const arrow = new URL("../assets/arrow.png", import.meta.url).href;

    const headerData = {
        pricing: {
            kicker: "PRICING",
            title: "Simple Pricing",
            breadcrumb: [
                { label: "Home", to: "/" },
                { label: "Pricing" }
            ],
            bg: "#FFFFFF"
        },
        team: {
            kicker: "WHAT WE DO",
            title: "Innovation tailored for you",
            breadcrumb: [
                { label: "Home", to: "/" },
                { label: "Team" }
            ],
            bg: "#FFFFFF"
        }
    };
    const { kicker, title, breadcrumb, bg } = headerData[type] || headerData.pricing;
    return (
        <section className="w-full" style={{ background: bg }}>
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="h-[280px] flex items-center">
                    <div className="w-[870px] mx-auto text-center">

                        {kicker && (
                            <p className="font-montserrat text-[14px] tracking-[0.2px] text-[#737373] mb-2">
                                {kicker}
                            </p>
                        )}

                        <h2 className="font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42]">
                            {title}
                        </h2>

                        <nav
                            className="mt-3 flex items-center justify-center gap-2 font-montserrat text-[14px] font-bold text-[#737373]"
                            aria-label="Breadcrumb"
                        >
                            {breadcrumb.map((item, i) => {
                                const last = i === breadcrumb.length - 1;
                                const Label = item.to ? (
                                    <Link to={item.to} className="hover:text-[#252B42]">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-[#252B42]">{item.label}</span>
                                );
                                return (
                                    <React.Fragment key={`${item.label}-${i}`}>
                                        {Label}
                                        {!last && <img src={arrow} alt="" className="w-[9px] h-[16px] opacity-70" />}
                                    </React.Fragment>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
