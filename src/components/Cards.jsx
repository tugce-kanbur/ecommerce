import React from 'react'

function Cards() {
    return (
        <div>
            <section className="md:hidden w-[414px] mx-auto bg-[#FAFAFA]">
                <div className="w-[333px] min-h-[1850px] mx-auto py-20 flex flex-col gap-[48px]">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                            EDITOR’S PICK
                        </h3>
                        <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Problems trying to resolve<br />the conflict between
                        </p>
                    </div>
                    <div className=" flex flex-col gap-[30px]">
                        <div className="relative w-[325px] h-[500px] mx-auto overflow-hidden">
                            <img
                                src="src/assets/filter12.png"
                                alt="MEN"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <button
                                className="absolute bottom-4 left-1/2 -translate-x-1/2
                     w-[170px] h-[48px] bg-white text-black font-bold shadow-sm"
                            >
                                MEN
                            </button>
                        </div>
                        <div className="relative w-[325px] h-[500px] mx-auto overflow-hidden">
                            <img
                                src="src/assets/filter22.png"
                                alt="WOMEN"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <button
                                className="absolute bottom-4 left-1/2 -translate-x-1/2
                     w-[170px] h-[48px] bg-white text-black font-bold shadow-sm"
                            >
                                WOMEN
                            </button>
                        </div>
                        <div className="relative w-[325px] h-[242px] mx-auto overflow-hidden">
                            <img
                                src="src/assets/filter3.png"
                                alt="ACCESSORIES"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <button
                                className="absolute bottom-4 left-1/2 -translate-x-1/2
                     w-[170px] h-[48px] bg-white text-black font-bold shadow-sm"
                            >
                                ACCESSORIES
                            </button>
                        </div>
                        <div className="relative w-[325px] h-[242px] mx-auto overflow-hidden">
                            <img
                                src="src/assets/filter4.png"
                                alt="KIDS"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <button
                                className="absolute bottom-4 left-1/2 -translate-x-1/2
                     w-[120px] h-[48px] bg-white text-black font-bold shadow-sm"
                            >
                                KIDS
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            <section className="hidden md:block w-full max-w-[1440px] mx-auto min-h-[770px] bg-[#FAFAFA]">
                <div className="max-w-[1124px] mx-auto py-20 flex flex-col gap-20">
                    <div className="max-w-[691px] h-auto flex flex-col items-center gap-[10px] mx-auto text-center">
                        <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-center">
                            EDITOR’S PICK
                        </h3>
                        <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] text-center">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

                        <div className="w-[510px] h-[500px] relative md:col-span-6 h-[500px] overflow-hidden">
                            <img src="src/assets/filter1.png" alt="MEN" className="absolute inset-0 w-full h-full object-cover" />
                            <button
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 
               w-[170px] h-[48px] bg-white text-black font-bold"
                            >
                                MEN
                            </button>
                        </div>


                        <div className="relative md:col-span-3 w-[240px] h-[500px] overflow-hidden">
                            <img src="src/assets/filter2.png" alt="WOMEN" className="absolute inset-0 w-full h-full object-cover" />
                            <button
                                className="absolute top-[434px] left-[21px] 
               w-[136px] h-[48px] 
               px-[35px] py-[12px] 
               bg-white text-black font-bold"
                            >
                                WOMEN
                            </button>
                        </div>


                        <div className="col-span-3 grid grid-rows-2 gap-[16px]">
                            <div className="relative w-[240px] h-[242px] overflow-hidden">
                                <img src="src/assets/filter3.png" alt="ACCESSORIES" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                    <button className="px-6 py-2 bg-white text-black font-bold">
                                        ACCESSORIES
                                    </button>
                                </div>
                            </div>
                            <div className="relative w-[240px] h-[242px] overflow-hidden">
                                <img src="src/assets/filter4.png" alt="KIDS" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                    <button className="px-6 py-2 bg-white text-black font-bold">
                                        KIDS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cards