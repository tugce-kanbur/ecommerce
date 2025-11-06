
import React from "react";

const statsData = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries  Worldwide" },
    { value: "100+", label: "Top Partners" },
];

export default function Stats() {
    return (
        <section className="w-full max-w-[1440px] mx-auto h-[264px] bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[181px] py-[80px] grid grid-cols-1 md:grid-cols-4 text-center gap-[40px]">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h1 className="font-montserrat font-bold
                text-[58px] leading-[80px] tracking-[0.2px]
                text-[#252B42] text-center">
                            {stat.value}
                        </h1>
                        <h5 className="text-[#737373] font-montserrat text-[16px] leading-[24px] font-bold">
                            {stat.label}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
