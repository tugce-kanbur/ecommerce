
import React from "react";
import { useLocation, Link } from "react-router-dom";

function ProductCardsDetails() {
    const { pathname } = useLocation();
    const isShop = pathname.startsWith("/shop");

    const imgs = [
        new URL("../assets/product1.png", import.meta.url).href,
        new URL("../assets/product2.png", import.meta.url).href,
        new URL("../assets/product3.png", import.meta.url).href,
        new URL("../assets/product4.png", import.meta.url).href,
        new URL("../assets/product5.png", import.meta.url).href,
        new URL("../assets/product6.png", import.meta.url).href,
        new URL("../assets/product7.png", import.meta.url).href,
        new URL("../assets/product8.png", import.meta.url).href,
        new URL("../assets/product9.png", import.meta.url).href,
        new URL("../assets/product10.png", import.meta.url).href,
        new URL("../assets/product11.png", import.meta.url).href,
        new URL("../assets/product12.png", import.meta.url).href,
        new URL("../assets/product13.png", import.meta.url).href,
        new URL("../assets/product14.png", import.meta.url).href,
        new URL("../assets/product15.png", import.meta.url).href,
        new URL("../assets/product16.png", import.meta.url).href,
        new URL("../assets/product17.png", import.meta.url).href,
        new URL("../assets/product18.png", import.meta.url).href,
        new URL("../assets/product19.png", import.meta.url).href,
        new URL("../assets/product20.png", import.meta.url).href,
    ];

    const subset = isShop ? imgs.slice(-12) : imgs.slice(0, 8);

    const rows = [];
    for (let i = 0; i < subset.length; i += 4) rows.push(subset.slice(i, i + 4));

    const frameH = isShop ? "h-[300px]" : "h-[427px]";
    const imgWH = isShop ? "w-[239px] h-[300px]" : "w-[239px] h-[427px]";

    const baseProduct = (img, pid) => ({
        id: String(pid),
        title: "Graphic Design",
        subtitle: "English Department",
        price: 6.48,
        oldPrice: 16.48,
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
        img,
    });

    return (
        <section className="w-full max-w-[1440px] mx-auto min-h-[1550px]">
            <div className="md:hidden w-full max-w-[414px] mx-auto bg-white py-10 flex flex-col gap-6 items-center">
                {subset.map((src, i) => {
                    const pid = imgs.indexOf(src) + 1;
                    const product = baseProduct(src, pid);

                    return (
                        <Link
                            key={`m-${i}`}
                            to={`/product/${pid}`}
                            state={{ product }}
                            className="block w-[348px] h-[615px] bg-white rounded-sm overflow-hidden flex flex-col"
                        >
                            <div
                                className="w-[328px] h-[427px] mx-auto bg-no-repeat bg-center overflow-hidden"
                                style={{ backgroundImage: `url(${src})`, backgroundSize: "70%" }}
                            />
                            <div className="h-[188px] px-4 pb-6 flex flex-col items-center justify-center text-center gap-2">
                                <h4 className="text-[#252B42] font-montserrat font-bold text-[16px] leading-[24px]">
                                    {product.title}
                                </h4>
                                <p className="text-[#737373] font-montserrat text-[14px] leading-[20px]">
                                    {product.subtitle}
                                </p>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#BDBDBD] font-montserrat text-[16px] leading-[24px]">
                                        ${product.oldPrice}
                                    </span>
                                    <span className="text-[#23856D] font-montserrat font-bold text-[16px] leading-[24px]">
                                        ${product.price}
                                    </span>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    {product.colors.map((c) => (
                                        <span key={c} className="w-4 h-4 rounded-full" style={{ background: c }} />
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="hidden md:block w-full max-w-[1440px]">
                <div
                    className={`relative flex flex-col 
             w-[1124px] ${isShop
                            ? "left-[158px] pt-[48px] pb-[48px] gap-[48px] h-auto"
                            : "left-[165px] pt-[80px] pb-[80px] gap-[80px] h-[1140px]"
                        }`}
                >
                    {rows.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className="w-[1049px] h-[488px] flex gap-[30px] mx-auto">
                            {row.map((src, i) => {
                                const pid = imgs.indexOf(src) + 1;
                                const product = baseProduct(src, pid);

                                return (
                                    <Link
                                        key={`card-${rowIndex}-${i}`}
                                        to={`/product/${pid}`}
                                        state={{ product }}
                                        className="w-[238px] h-[488px] bg-white flex flex-col"
                                    >
                                        <div className={`w-full ${frameH}`}>
                                            <img
                                                src={src}
                                                alt={`Product ${pid}`}
                                                className={`${imgWH} object-cover`}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 p-4 items-center">
                                            <h3 className="text-[#252B42] font-bold text-[16px] leading-[24px] text-center">
                                                {product.title}
                                            </h3>
                                            <p className="text-[#737373] text-[14px] font-bold text-center">
                                                {product.subtitle}
                                            </p>
                                            <div className="flex gap-2 items-center">
                                                <span className="text-[#737373]">${product.oldPrice}</span>
                                                <span className="text-[#23856D] font-bold">${product.price}</span>
                                            </div>
                                            <div className="flex gap-1 mt-2">
                                                {product.colors.map((c) => (
                                                    <span key={c} className="w-4 h-4 rounded-full" style={{ background: c }} />
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductCardsDetails;
