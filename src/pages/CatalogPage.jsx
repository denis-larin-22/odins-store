import { CarouselBaner } from "../components/catalog-page";
import { ProductList } from "../components/catalog-page/ProductList";
import { Header, Footer } from "../components/common";

export const CatalogPage = () => {
    return (
        <>
            <Header />
            <ProductList />
            <CarouselBaner />
            <Footer />
        </>
    )
}