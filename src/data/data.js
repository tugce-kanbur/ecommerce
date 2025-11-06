import blog1 from "../assets/fixed.png";
import blog2 from "../assets/fixed1.png";
import blog3 from "../assets/fixed2.png";
import blog4 from "../assets/fixed3.png";
import blog5 from "../assets/fixed4.png";
import blog6 from "../assets/fixed5.png";

export const COMMON_POST = {
    badge: "NEW",
    tags: [
        { label: "Google", color: "#23A6F0" },
        { label: "Trending" },
        { label: "New" },
    ],
    title: "Loudest à la Madison #1 (L’intégral)",
    textMobile: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
    textDesktop: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    learnHref: "#",
};

const MOBILE_IMAGES = [blog4, blog5, blog6];
const DESKTOP_IMAGES = [blog1, blog2, blog3];


export function getMobilePosts() {
    return MOBILE_IMAGES.map((img, i) => ({
        id: `m${i + 1}`,
        img,
        ...COMMON_POST,
        bodyClass:
            i === 2
                ? "pt-[25px] pr-[25px] pb-[35px] pl-[25px]"
                : "pt-[10px] pr-[25px] pb-[35px] pl-[25px]",
    }));
}


export function getDesktopPosts() {
    return DESKTOP_IMAGES.map((img, i) => ({
        id: `d${i + 1}`,
        img,
        ...COMMON_POST,
    }));
}
