import { useEffect } from "react";
import { connect } from "react-redux";
import { CarouselBaner, LeaderProducts } from "../components/catalog-page";
import { ProductList } from "../components/catalog-page/ProductList";
import { Header, Footer } from "../components/common";
import { getProductsListFromFirebase } from "../api/getProductsListFromFirebase";

const CatalogPageView = ({ list, catalog, getList }) => {

    useEffect(() => {
        if (!list.length) getList();
        return
    })

    return (
        <>
            <Header />
            <ProductList catalog={catalog} />
            <LeaderProducts />
            <CarouselBaner list={list} />
            <Footer />
        </>
    )
}

const mapState = (state) => ({
    list: state.productList,
    catalog: state.catalogList
})

const mapDispatch = (dispatch) => ({
    getList: () => dispatch(getProductsListFromFirebase())
})

export const CatalogPage = connect(mapState, mapDispatch)(CatalogPageView);