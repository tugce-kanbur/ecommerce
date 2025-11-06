import React from 'react'

function ProductCards() {

    return (
        <section className="w-full max-w-[1440px] mx-auto min-h-[180px]">
            <div className="md:hidden w-full max-w-[414px] mx-auto bg-white py-10 flex flex-col gap-6 items-center">
                <div className="flex flex-col items-center text-center gap-2 mb-2">
                    <h2 className="font-montserrat text-[20px] leading-[20px] tracking-[0.2px] text-[#737373]">
                        Featured Products
                    </h2>
                    <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                        BESTSELLER <br />PRODUCTS
                    </h3>
                    <p className="font-montserrat text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                        Problems trying to resolve the <br />conflict between
                    </p>
                </div>
            </div>
            <div className="hidden md:block w-full max-w-[1440px]">
                <div className="w-[1124px] h-[102px] relative left-[165px] 
                pt-[80px] pb-[80px] flex flex-col gap-[80px]">
                    <div className="max-w-[691px] h-auto flex flex-col items-center gap-[10px] mx-auto text-center">
                        <h2 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] text-center">
                            Featured Products
                        </h2>
                        <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-center">
                            BESTSELLER PRODUCTS
                        </h3>
                        <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] text-center">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCards
