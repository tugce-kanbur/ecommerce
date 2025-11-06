import React from "react";
import clock from "../assets/clock.png";
import Vector11 from "../assets/Vector11.png";
import ok from "../assets/ok.png";
import { getMobilePosts, getDesktopPosts } from "../data/data.js";



function Blog() {
    const mobilePosts = getMobilePosts();
    const desktopPosts = getDesktopPosts();

    return (
        <div>
            <section className="md:hidden relative mx-auto w-[414px] h-[2100px] bg-white absolute top-[2px]">
                <div className="w-[329px] mx-auto flex flex-col pb-[30px] items-center">
                    <div className="flex flex-col items-center w-[300px] h-[184px] pb-[56px] mx-auto">
                        <h6 className="text-[#23A6F0] text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">
                            Practice Advice
                        </h6>
                        <h2 className="mt-2 text-[#252B42] font-montserrat font-extrabold text-[24px] leading-[32px]">
                            Featured <br />Products
                        </h2>
                        <p className="mt-2 text-[#737373] text-[14px] leading-[20px] w-[329px] text-center">
                            Problems trying to resolve the<br /> conflict between the two major
                        </p>
                    </div>

                    <div className="w-[329px] mx-auto flex flex-col gap-[4px] pb-[24px] items-center">
                        {mobilePosts.map((post) => (
                            <article key={post.id} className="w-[330px] h-[606px] bg-white">
                                <div className="relative w-[328px] h-[200px] overflow-hidden">
                                    <img
                                        src={post.img}
                                        alt={`Blog ${post.id}`}
                                        className="absolute inset-0 w-[330px] h-[300px] object-cover"
                                    />
                                    <span className="absolute top-4 left-4 bg-[#E74040] text-white text-[12px] font-bold px-3 py-[6px] rounded">
                                        {post.badge}
                                    </span>
                                </div>

                                <div className={`w-[330px] h-[306px] ${post.bodyClass} flex flex-col gap-[10px] bg-white shadow-md`}>
                                    <div className="flex gap-3 text-[12px] text-[#737373]">
                                        {post.tags.map((t, i) => (
                                            <span key={i} style={t.color ? { color: t.color } : undefined}>
                                                {t.label}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-[#252B42] font-montserrat text-[16px] leading-[24px]">
                                        {post.title}
                                    </h3>

                                    <p className="text-[#737373] text-[14px] leading-[20px]">{post.textMobile}</p>

                                    <div className="flex justify-between items-center text-[12px] text-[#737373]">
                                        <div className="flex items-center gap-2">
                                            <img src={clock} alt="clock" className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src={Vector11} alt="comments" className="w-4 h-4" />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>

                                    <a href={post.learnHref} className="flex items-center gap-2 text-[#737373] font-bold text-[14px] mt-1">
                                        Learn More
                                        <img src={ok} alt="" className="w-2 h-2" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hidden md:block w-full max-w-[1440px] h-[1044px] mx-auto bg-white">
                <div className="w-[1050px] h-[1044px] relative left-[195px] pt-[112px] pb-[112px] flex flex-col gap-[80px]">
                    <div className="w-[691px] h-[134px] flex flex-col items-center gap-[10px] mx-auto text-center">
                        <h6 className="w-[114px] h-[24px] font-montserrat text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#23A6F0]">
                            Practice Advice
                        </h6>
                        <h2 className="w/[309px] h/[50px] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center text-[#252B42]">
                            Featured Posts
                        </h2>
                        <p className="w/[469px] h/[40px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center text-[#737373]">
                            Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    <div className="w-[1045px] h-[606px] flex gap-[30px]">
                        {desktopPosts.map((post) => (
                            <div key={post.id} className="w-[328px] h-[606px] bg-white shadow-md flex flex-col">
                                <div className="w-full h-[300px] relative">
                                    <img src={post.img} alt={`Blog ${post.id}`} className="w-full h-full object-cover" />
                                    <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded">
                                        {post.badge}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3 p-4">
                                    <div className="flex gap-3 text-xs text-[#737373]">
                                        {post.tags.map((t, i) => (
                                            <span key={i} style={t.color ? { color: t.color } : undefined}>
                                                {t.label}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-[#252B42] text-lg font-montserrat font-normal">{post.title}</h3>

                                    <p className="text-[#737373] text-sm">{post.textDesktop}</p>

                                    <div className="flex justify-between text-xs text-[#737373]">
                                        <div className="flex items-center gap-2">
                                            <img src={clock} alt="clock" className="w-[16px] h-[16px] object-cover" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src={Vector11} alt="comments" className="w-[16px] h-[16px] object-cover" />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>

                                    <a href={post.learnHref} className="flex items-center gap-2 text-[#737373] font-bold text-sm mt-2">
                                        Learn More
                                        <img src={ok} alt="ok" className="w-[12px] h-[12px] object-cover" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
