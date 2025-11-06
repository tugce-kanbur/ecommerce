import React from 'react'
import Clients from '../components/Clients';
import ShopContainer from '../components/ShopContainer';
import ProductDetailHeader from '../components/ProductDetailHeader';

function ProductDetailPage() {
    return (
        <div>
            <ShopContainer />
            <ProductDetailHeader />
            <Clients />
        </div>
    )
}

export default ProductDetailPage
