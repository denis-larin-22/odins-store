import { useEffect } from "react";
import { connect } from "react-redux";
import { Filters } from "../components/catalog-page";
import { ProductList } from "../components/catalog-page/ProductList";
import { Header, Footer } from "../components/common";
import { getProductsListFromFirebase } from "../api/getProductsListFromFirebase";
import { filterListAction } from "../core/store";

const CatalogPageView = ({ list, catalog, getList, getFilter }) => {

    useEffect(() => {
        if (!list.length) getList();
        return
    })

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Header />
                <Filters list={list} getFilter={getFilter} />
            </div>
            <div>

                <ProductList catalog={catalog} />
                <Footer />
            </div>

        </div>
    )
}

const mapState = (state) => ({
    list: state.productList,
    catalog: state.catalogList
})

const mapDispatch = (dispatch) => ({
    getList: () => dispatch(getProductsListFromFirebase()),
    getFilter: (filter) => dispatch(filterListAction(filter)),
})

export const CatalogPage = connect(mapState, mapDispatch)(CatalogPageView);