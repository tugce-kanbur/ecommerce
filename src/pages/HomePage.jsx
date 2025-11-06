import Hero from "../components/Hero";
import Cards from "../components/Cards";
import ProductCards from "../components/ProductCards";
import Carousel from "../components/Carousel";
import Fluid from "../components/Fluid";
import Blog from "../components/Blog";
import ProductCardsDetails from "../components/ProductCardsDetails";


export default function HomePage() {
    return (
        <section className="min-h-dvh flex flex-col bg-white">
            <Hero />
            <Cards />
            <ProductCards />
            <ProductCardsDetails rows={2} />
            <Carousel />
            <Fluid />
            <Blog />
        </section>
    );
}