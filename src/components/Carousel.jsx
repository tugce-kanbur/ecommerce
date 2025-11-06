import React from 'react'
import carouselImg from "../assets/filter5.png";

function Carousel() {
    return (
        <div>
            <section className="md:hidden relative mx-auto w-[414px] h-[1230px] overflow-hidden bg-[#23856D]">
                <div className="absolute left-1/2 -translate-x-1/2 top-[250px] w-[360px] h-[429px] text-center gap-[35px]">
                    <h5 className="font-montserrat text-[20px] leading-[30px] tracking-[0.2px] text-white uppercase mb-[40px]">
                        SUMMER 2020
                    </h5>

                    <h1 className="mt-2 font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-white mb-[40px]">
                        Vita Classic<br />Product
                    </h1>

                    <p className="mt-2 font-montserrat text-white/90 text-[20px] leading-[30px] max-w-[260px] mx-auto">
                        We know how large objects <br /> will act, but things on a <br /> small scale.
                    </p>

                    <span className="mt-4 block text-white font-bold text-[18px] mb-[10px]">
                        $16.48
                    </span>
                    <div className="mt-3 flex items-center justify-center gap-10">
                        <button aria-label="Previous" className="shrink-0">
                            <img src="/src/assets/ChevronLeft.png" alt="" className="w-[20px] h-[36px]" />
                        </button>

                        <a
                            href="/shop"
                            className="h-[40px] min-w-[140px] px-4 rounded-[5px] bg-[#2DC071]
                   text-white font-montserrat font-bold text-[14px]
                   inline-flex items-center justify-center"
                        >
                            ADD TO CART
                        </a>

                        <button aria-label="Next" className="shrink-0">
                            <img src="/src/assets/ChevronRight.png" alt="" className="w-[20px] h-[36px]" />
                        </button>
                    </div>
                </div>
                <img
                    src={carouselImg}
                    alt="Vita Classic Product"
                    className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2
               w-[388px] h-auto max-h-[720px] object-contain"
                />
            </section>

            <section className="hidden md:block relative overflow-hidden  w-full max-w-[1440px] mx-auto w-[1440px] h-[711px] bg-[#23856D]">
                <div className=''>
                    <img
                        src={carouselImg}
                        alt="Hero Background"
                        className="absolute left-[800px] mt-32 relative w-[443px] h-full"
                    />
                </div>
                <div className="absolute top-[155px] left-[205px] 
             w-[975px] h-[651px] 
             pt-[1px] pb-[112px] 
             flex flex-col gap-[20px] z-10">
                    <h5 className="font-montserrat  text-base leading-6 tracking-[0.1px] text-white uppercase">
                        SUMMER 2020
                    </h5>
                    <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white whitespace-nowrap">
                        Vita Classic <br /> Product
                    </h1>
                    <p className="mt-4 text-white/90 text-base md:text-lg leading-7 font-montserrat">
                        We know how large objects will act, We know <br /> how are objects will act, We know
                    </p>

                    <div className='flex items-center  gap-6 px-[129px] mt-6 px-[5px]'>
                        <span className="text-white font-bold text-[24px]">
                            $16.48
                        </span>
                        <a href="/shop" className="w-[181px] h-[52px] 
             px-[20px] text-center py-[15px] 
             bg-[#2DC071] text-white 
             font-bold rounded-[5px]">
                            ADD TO CART
                        </a>
                    </div>
                </div>
                <button aria-label="Previous" className="absolute top-1/2 -translate-y-1/2 left-10 w-6 h-11 z-20">
                    <img src="/src/assets/ChevronLeft.png" alt="" className="w-full h-full" />
                </button>
                <button aria-label="Next" className="absolute top-1/2 -translate-y-1/2 right-10 w-6 h-11 z-20">
                    <img src="/src/assets/ChevronRight.png" alt="" className="w-full h-full" />
                </button>
            </section>
        </div>
    )
}

export default Carousel
