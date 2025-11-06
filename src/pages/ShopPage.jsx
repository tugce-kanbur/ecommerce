import React from 'react'
import ShopContainer from "../components/ShopContainer";
import ShopCard from "../components/ShopCard";
import FilterRow from '../components/FilterRow';
import ProductCardsDetails from '../components/ProductCardsDetails';
import Pagination from '../components/Pagination';
import Clients from '../components/Clients';

function ShopPage() {
    return (
        <div>
            <section className="min-h-dvh flex flex-col bg-white">
                <ShopContainer />
                <ShopCard />
                <FilterRow />
                <ProductCardsDetails rows={3} />
                <Pagination page={2} total={3} onChange={(p) => console.log(p)} />
                <Clients />
            </section>
        </div>
    )
}

export default ShopPage
