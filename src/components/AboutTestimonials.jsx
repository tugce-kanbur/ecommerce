import React from "react";
import aboutTestimonials1 from "../assets/aboutTestimonials1.png";

export default function AboutTestimonials() {
    return (
        <section className="max-w-[1440px] mx-auto w-full h-[650px] bg-[#FAFAFA] py-[75px]">
            <div className="grid md:grid-cols-2 h-[636px]">
                <div className="w-[850px] bg-[#2A7CC7] text-white flex items-center justify-center relative">
                    <div className="p-1 w-[438px] h-[238px] flex flex-col justify-between gap-[24px]">
                        <h5 className="text-[16px] font-montserrat uppercase tracking-[0.2px] font-bold">
                            Work With Us
                        </h5>
                        <h2 className="font-montserrat font-bold text-[40px] leading-[40px]">
                            Now Let’s grow Yours
                        </h2>
                        <p className="font-montserrat text-[14px] leading-[20px] opacity-80">
                            The gradual accumulation of information about atomic and small-scale behavior
                            during the first quarter of the 20th century
                        </p>
                        <button className="bg-[#2A7CC7] text-white w-[130px] h-[52px] flex items-center justify-center gap-[10px] px-[40px] py-[15px] rounded-[5px] border border-solid">
                            Button
                        </button>
                    </div>
                </div>
                <div className="w-[637px] h-[640px]">
                    <img
                        src={aboutTestimonials1}
                        alt="Testimonial"
                        className="absolute w-[637px] h-[640px] left-[1057px] top-100 object-contain opacity-100"
                    />
                </div>
            </div>
        </section>
    );
}
