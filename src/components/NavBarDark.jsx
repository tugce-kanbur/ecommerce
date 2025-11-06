import React from "react";
import { useLocation } from "react-router-dom";

export default function NavBarDark() {
    const { pathname } = useLocation();
    const isShop = /^\/(shop|product)(\/|$)/.test(pathname);
    const bg = isShop ? "#23856D" : "#252B42";

    return (
        <div className="hidden md:block w-full max-w-[1440px] mx-auto">
            <div
                className={`h-[58px] flex items-center justify-between ${isShop ? "px-[195px]" : "px-6"
                    }`}
                style={{ backgroundColor: bg }}
            >
                <div className="flex items-center gap-6 text-white text-sm">
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/Vector.png" alt="phone" className="w-4 h-4" />
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/Vector1.png" alt="mail" className="w-4 h-3" />
                        <span>michelle.rivera@example.com</span>
                    </div>
                </div>
                <p className="text-white text-sm hidden md:block">
                    Follow Us and get a chance to win 80% off
                </p>
                <div className="flex items-center gap-3 text-white text-sm">
                    <span>Follow Us :</span>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img src="/src/assets/Vector2.png" alt="ig" className="w-4 h-4" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                        <img src="/src/assets/Vector3.png" alt="yt" className="w-4 h-4" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img src="/src/assets/Vector 4.png" alt="fb" className="w-4 h-4" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img src="/src/assets/Vector5.png" alt="tw" className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
