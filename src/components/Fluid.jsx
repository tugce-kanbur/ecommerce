import React from 'react'
import fluidImg from "../assets/filter6.png";

function Fluid() {
    return (
        <section className="bg-white">
            <div className="md:hidden block relative mx-auto w-full max-w-[1440px] h-[880px] overflow-hidden">
                <div className="pt-[125px] px-6 text-center flex flex-col items-center">
                    <h5 className="text-[12px] leading-[18px] font-bold text-[#BDBDBD] tracking-[0.2px] uppercase">
                        SUMMER 2020
                    </h5>

                    <h1 className="mt-3 text-[28px] leading-[36px] font-bold text-[#252B42]">
                        Part of the
                        <br />
                        Neural
                        <br />
                        Universe
                    </h1>

                    <p className="mt-4 text-[#737373] text-[14px] leading-[20px] max-w-[290px]">
                        We know how large <br /> objects
                        will act, but <br />things on a
                        small scale.
                    </p>

                    <div className="mt-5 flex flex-col gap-3">
                        <button className="h-[44px] w-[140px] mx-auto rounded-[5px] bg-[#23A6F0] text-white font-bold">
                            BUY NOW
                        </button>
                        <button className="h-[44px] w-[140px] mx-auto rounded-[5px] border border-[#23A6F0] text-[#23A6F0] font-bold">
                            Learn More
                        </button>
                    </div>
                </div>
                <img
                    src={fluidImg}
                    alt="Hero"
                    className="pointer-events-none absolute bottom-[70px] left-1/2 -translate-x-1/2 w-[333px] h-auto object-contain"
                />
            </div>

            <div className="hidden md:grid max-w-[1440px] mx-auto grid grid-cols-12 items-center gap-12 px-12 h-[682px]">

                <div className="col-span-12 lg:col-span-7 flex justify-start">
                    <div className="relative w-[704px] h-[682px] overflow-hidden">
                        <img
                            src={fluidImg}
                            alt="Hero"
                            className="absolute top-[2px] left-[-37px] w-[741px] h-[682px] object-cover"
                        />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5 flex">
                    <div className="self-center w-[573px] space-y-[30px] items-start">
                        <h5 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2px]">
                            SUMMER 2020
                        </h5>

                        <h1 className="text-[40px] leading-[50px] font-bold text-[#252B42]">
                            Part of the Neural <br /> Universe
                        </h1>

                        <p className="text-[#737373] text-[16px] leading-[24px]">
                            We know how large objects will act, <br /> but things on a small
                            scale.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-10 py-4 bg-[#2DC071] text-white font-bold rounded-[5px]">
                                BUY NOW
                            </button>
                            <button className="px-10 py-4 border border-[#2DC071] text-[#2DC071] font-bold rounded-[5px]">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fluid
