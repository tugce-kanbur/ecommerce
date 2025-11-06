import { Link } from "react-router-dom";
import heroImg from "../assets/headerImg.png";

export default function Hero() {
    return (
        <div>
            <section className="md:hidden  w-full max-w-[1440px] relative mx-auto w-[414px] h-[753px] overflow-hidden">
                <div
                    className="relative mx-auto w-[414px] h-[753px] 
             overflow-hidden border border-[#DEDEDE]
             bg-cover"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundPosition: "59% center",
                    }}
                >
                </div>

                <div
                    className="absolute top-[48px] left-[164px] -translate-x-1/2
               w-[414px] h-[705px]
               pt-[90px] pb-[112px]
               flex flex-col items-center justify-center
               gap-[30px]"
                >
                    <div className="text-white text-center space-y-[14px]">
                        <p className="font-montserrat font-bold tracking-[0.2px] uppercase text-[16px]">
                            SUMMER 2020
                        </p>
                        <h1 className="font-montserrat font-bold leading-[44px] tracking-[0.2px] text-[35px]">
                            NEW
                            <br />
                            COLLECTION
                        </h1>

                        <p className="mx-auto max-w-[300px] text-[20px] leading-[24px] text-white">
                            We know how large objects <br />will act,
                            but things on a <br />small scale.
                        </p>
                    </div>
                    <Link
                        to="/shop"
                        className="inline-flex items-center justify-center
                 w-[186px] h-[52px]
                 bg-[#2DC071] text-white
                 font-montserrat font-bold"
                    >
                        SHOP NOW
                    </Link>
                </div>
                <button
                    aria-label="Previous"
                    className="absolute left-[10px] top-1/2 -translate-y-1/2 z-20"
                >
                    <img src="/src/assets/ChevronLeft.png" alt="" className="w-[24px] h-[44px]" />
                </button>
                <button
                    aria-label="Next"
                    className="absolute right-[70px] top-1/2 -translate-y-1/2 z-20"
                >
                    <img src="/src/assets/ChevronRight.png" alt="" className="w-[24px] h-[44px]" />
                </button>
            </section>
            <section className="hidden md:block relative w-full max-w-[1440px] h-[716px] border border-[#DEDEDE] mx-auto overflow-hidden">
                <img
                    src={heroImg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />


                <div className="absolute top-[155px] left-[205px] 
             w-[975px] h-[651px] 
             pt-[112px] pb-[112px] 
             flex flex-col gap-[80px] z-10">
                    <div className="px-10 md:px-20 max-w-xl">
                        <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-white uppercase">
                            SUMMER 2020
                        </h5>
                        <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white whitespace-nowrap">
                            NEW COLLECTION
                        </h1>
                        <p className="mt-4 text-white/90 text-base md:text-lg leading-7">
                            We know how large objects will act,<br />
                            but things on a small scale.
                        </p>
                        <a href="/shop" className="mt-6 w-[170px] inline-block px-6 py-3 bg-[#2DC071] text-white font-bold rounded text-center font-montserrat">
                            SHOP NOW
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
    );
}