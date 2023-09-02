import { Footer } from "../components/common/Footer"
import { Header } from "../components/common/Header"
import { LeaderProducts, ProductItem } from "../components/product-page"

export const ProductPage = () => {
    return (
        <div className="">
            <Header />
            <ProductItem />
            {/* Лидеры продаж */}
            <LeaderProducts />
            <Footer />
        </div>
    )
}