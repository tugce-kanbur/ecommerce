import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function PageContent() {
    const { pathname } = useLocation();
    const greenPrefixes = ["/shop", "/product"];
    const isGreenPage = /^\/(shop|product|products)(\/|$)/.test(pathname);
    const topBarBg = isGreenPage ? "#23856D" : "#252B42";

    return (
        <div className="min-h-dvh flex flex-col bg-white">
            <Header topBarBg={topBarBg} />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
