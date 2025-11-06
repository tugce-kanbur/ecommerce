import React from "react";

const categories = [
    { id: 1, title: "CLOTHS", items: "5 Items", img: "/src/assets/shopcard1.png" },
    { id: 2, title: "CLOTHS", items: "5 Items", img: "/src/assets/shopcard2.png" },
    { id: 3, title: "CLOTHS", items: "5 Items", img: "/src/assets/shopcard3.png" },
    { id: 4, title: "CLOTHS", items: "5 Items", img: "/src/assets/shopcard4.png" },
    { id: 5, title: "CLOTHS", items: "5 Items", img: "/src/assets/shopcard5.png" },
];

export default function ShopCard() {
    return (
        <>
            <section className="md:hidden w-full bg-[#FAFAFA] px-4 py-6">
                <div className="mx-auto flex flex-col gap-4">
                    {categories.map((categorie) => (
                        <div
                            key={categorie.id}
                            className="relative w-full overflow-hidden w-[332px] h-[300px] bg-white shadow cursor-pointer"
                        >
                            <img
                                src={categorie.img}
                                alt={categorie.title}
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <h3 className="font-montserrat font-bold text-[20px] leading-[28px]">
                                    {categorie.title}
                                </h3>
                                <p className="font-montserrat text-[14px] leading-[20px]">
                                    {categorie.items}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hidden md:block w-full max-w-[1440px] mx-auto bg-[#FAFAFA] py-12">
                <div className="w-[1050px] mx-auto h-[223px] flex gap-[15px]">
                    {categories.map((categorie) => (
                        <div
                            key={categorie.id}
                            className="relative flex-1 w-[205px] h-[223px] bg-white shadow-md opacity-100 overflow-hidden flex items-center justify-center group cursor-pointer"
                        >
                            <img
                                src={categorie.img}
                                alt={categorie.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="relative z-10 text-center text-white">
                                <h3 className="font-montserrat font-bold text-[20px] leading-[28px]">
                                    {categorie.title}
                                </h3>
                                <p className="font-montserrat text-[14px] leading-[20px]">{categorie.items}</p>
                            </div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
