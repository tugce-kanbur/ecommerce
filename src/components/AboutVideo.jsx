
import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import posterImg from "../assets/about-video-poster.png";

export default function AboutVideo({
    playable = true,
    type = "youtube",
    src = "https://www.youtube.com/",
    poster = { posterImg },
    title = "About Video",
}) {
    const [open, setOpen] = useState(false);
    return (
        <section className="w-full bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[181px] py-[60px]">
                <div className="relative w-full max-w-[1080px] mx-auto rounded-[16px] overflow-hidden shadow-sm">
                    <img
                        src={posterImg}
                        alt={title}
                        className="w-full h-auto aspect-video object-cover"
                        loading="lazy"
                    />
                    <button
                        type="button"
                        onClick={playable ? () => setOpen(true) : undefined}
                        aria-label={playable ? "Play video" : "Video preview"}
                        className={`
              absolute inset-0 grid place-items-center transition
              ${playable ? "hover:bg-black/10 focus-visible:outline" : "pointer-events-none"}
            `}
                    >
                        <span
                            className={`
                grid place-items-center rounded-full
                w-[96px] h-[96px] 
                bg-[#23A6F0] text-white shadow-md
                ${playable ? "opacity-100" : "opacity-90"}
              `}
                        >
                            <FiPlay size={40} />
                        </span>
                    </button>
                </div>
            </div>
            {playable && open && (
                <div
                    className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${title} modal`}
                >
                    <div className="relative w-full max-w-[1000px] rounded-xl overflow-hidden bg-black">
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close video"
                            className="absolute top-3 right-3 z-[2] grid place-items-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80"
                        >
                            <IoClose size={22} />
                        </button>
                        <div className="relative w-full aspect-video">
                            {type === "youtube" ? (
                                <iframe
                                    title={title}
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${src}?autoplay=1&rel=0&modestbranding=1`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    className="absolute inset-0 w-full h-full"
                                    src={src}
                                    poster={poster}
                                    controls
                                    autoPlay
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
