import React from "react";
import { LayoutGrid, List, ChevronDown } from "lucide-react";

export default function FilterRow() {
    return (
        <>
            <section className="md:hidden w-full bg-white px-4 py-6">
                <div className="flex flex-col items-center gap-4">
                    <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] text-center">
                        Showing all 12 results
                    </h6>

                    <div className="flex items-center gap-3">
                        <span className="font-montserrat font-bold text-[14px] text-[#737373]">
                            Views:
                        </span>
                        <button className="h-10 w-10 border rounded flex items-center justify-center hover:bg-gray-50">
                            <LayoutGrid size={18} />
                        </button>
                        <button className="h-10 w-10 border rounded flex items-center justify-center hover:bg-gray-50">
                            <List size={18} />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select
                                aria-label="Sort products"
                                defaultValue="popularity"
                                className="h-[50px] min-w-[180px] pl-4 pr-9 border rounded text-[14px] text-[#737373] bg-white appearance-none"
                            >
                                <option value="popularity">Popularity</option>
                                <option value="reduced">Reduced</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
                        </div>
                        <button
                            className="w-[141px] h-[50px] rounded bg-[#23A6F0] text-white
              font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]
              flex items-center justify-center hover:opacity-90 transition"
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </section>

            <section className="hidden md:block w-full max-w-[1440px] mx-auto bg-white">
                <div className="max-w-[1050px] h-[98px] py-[24px] mx-auto">
                    <div className="w-full h-[50px] flex items-center justify-between">
                        <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                            Showing all 12 results
                        </h6>

                        <div className="flex items-center gap-[20px]">
                            <div className="w-[177px] h-[46px] px-[1px] flex items-center gap-[15px]">
                                <span className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                    Views:
                                </span>
                                <button className="h-10 w-10 border rounded flex items-center justify-center hover:bg-gray-50">
                                    <LayoutGrid size={18} />
                                </button>
                                <button className="h-10 w-10 border rounded flex items-center justify-center hover:bg-gray-50">
                                    <List size={18} />
                                </button>
                            </div>

                            <div className="relative">
                                <select
                                    aria-label="Sort products"
                                    defaultValue="popularity"
                                    className="h-[50px] min-w-[180px] pl-4 pr-9 border rounded text-[14px] text-[#737373] bg-white appearance-none"
                                >
                                    <option value="popularity">Popularity</option>
                                    <option value="reduced">Reduced</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
                            </div>

                            <button
                                className="w-[141px] h-[50px] rounded bg-[#23A6F0] text-white
                font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]
                flex items-center justify-center hover:opacity-90 transition"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
