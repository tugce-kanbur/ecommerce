import { useLocation } from "react-router-dom";
import NavBarDark from "../components/NavBarDark";
import NavBarLight from "../components/NavBarLight";


export default function Header() {
    const { pathname } = useLocation();
    const isShopPage = pathname.startsWith("/shop");
    return (
        <header className="w-full max-w-[1440px] mx-auto">
            <NavBarDark />
            <NavBarLight />
        </header>
    );
}
