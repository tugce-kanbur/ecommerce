
import React from "react";
import { Link } from "react-router-dom";
import technology1 from "../assets/technology1.png";

export default function AboutHeader() {
    return (
        <section className="w-full max-w-[1440px] mx-auto bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[181px]">
                <div className="grid md:grid-cols-[1fr_632px] items-center gap-[80px] py-[120px]">
                    <div className="max-w-[651px] flex flex-col gap-[35px]">
                        <h5 className="font-montserrat text-[14px] tracking-[0.2px] text-[#252B42] uppercase font-bold">
                            ABOUT COMPANY
                        </h5>

                        <h1 className="font-montserrat font-bold text-[58px] leading-[70px] text-[#252B42]">
                            ABOUT US
                        </h1>

                        <p className="font-montserrat text-[16px] leading-[24px] text-[#737373]">
                            We know how large objects will act, but things on a small scale
                            just do not act that way.
                        </p>

                        <div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-[40px] py-[15px] rounded-[5px] bg-[#23A6F0] text-white font-montserrat font-bold hover:opacity-90 transition"
                            >
                                Get Quote Now
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-[632px] h-[612px] mx-auto">
                        <div
                            className="absolute rounded-full bg-[#FDECEC]"
                            style={{
                                width: "484.0626px",
                                height: "484.0626px",
                                left: "58.4px",
                                top: "0px",
                            }}
                        />
                        <div
                            className="absolute rounded-full bg-[#FDECEC]"
                            style={{
                                width: "77.3937px",
                                height: "77.3937px",
                                left: "0px",
                                top: "11.96px",
                            }}
                        />
                        <div
                            className="absolute rounded-full bg-[#977DF4]"
                            style={{
                                width: "14.7752px",
                                height: "14.7752px",
                                left: "576.94px",
                                top: "121.72px",
                            }}
                        />
                        <div
                            className="absolute rounded-full bg-[#FDECEC]"
                            style={{
                                width: "30.2539px",
                                height: "30.2539px",
                                left: "554.42px",
                                top: "247.66px",
                            }}
                        />
                        <div
                            className="absolute rounded-full bg-[#977DF4]"
                            style={{
                                width: "14.7752px",
                                height: "14.7752px",
                                left: "23.92px",
                                top: "408.78px",
                            }}
                        />
                        <img
                            src={technology1}
                            alt="Shopping girl"
                            className="absolute"
                            style={{
                                width: "571px",
                                height: "668px",
                                left: "34px",
                                top: "-56px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
