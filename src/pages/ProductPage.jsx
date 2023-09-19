import { connect } from "react-redux";
import { Footer, Header } from "../components/common";
import { ProductItem } from "../components/product-page";
import { addFavoriteAction } from "../core/store";

const ProductPageView = ({ activeProduct, favoritesList, addFavorite }) => {
    window.scrollTo(0, 0);
    const isActiveProductFavorite = favoritesList.some(item => item.name === activeProduct.name);

    if (activeProduct) return (
        <>
            <Header />
            <ProductItem activeProduct={activeProduct} addFavoriteHandler={addFavorite} favoriteBtnToggler={isActiveProductFavorite} />
            <Footer />
        </>
    )

    return <p className="container min-h-screen flex items-center justify-center">Щось пішло не так( <br /> Виберіть спочатку товар із каталогу</p>
}

const mapState = (state) => ({
    activeProduct: state.activeProduct,
    favoritesList: state.favoritesList
});

const mapDispatch = (dispatch) => ({
    addFavorite: (product) => dispatch(addFavoriteAction(product))
})

export const ProductPage = connect(mapState, mapDispatch)(ProductPageView);