import knolli from "../assets/Client1.png";
import lyft from "../assets/Client2.png";
import leaf from "../assets/Client3.png";
import stripe from "../assets/Client4.png";
import aws from "../assets/Client5.png";
import reddit from "../assets/Client6.png";

export default function Clients() {
    const brands = [
        { src: knolli, alt: "Knolli" },
        { src: lyft, alt: "Lyft" },
        { src: leaf, alt: "Leaf" },
        { src: stripe, alt: "Stripe" },
        { src: aws, alt: "AWS" },
        { src: reddit, alt: "Reddit" },
    ];

    return (
        <section className="w-full max-w-[1440px] h-[175px] mx-auto bg-[#FAFAFA] py-10 md:py-14">
            <div className="mx-auto w-full max-w-[1050px] px-4">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-10 md:gap-12
                max-[768px]:grid-cols-1 max-[768px]:gap-8">
                    {brands.map((b) => (
                        <li key={b.alt} className="flex justify-center">
                            <img
                                src={b.src}
                                alt={b.alt}
                                className="
                    w-[152px] h-[65px]
                    object-contain
                    opacity-60 hover:opacity-100
                    transition-opacity
                    filter grayscale
                "
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}