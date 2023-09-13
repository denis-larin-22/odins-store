import { connect } from "react-redux";
import { Footer, Header } from "../components/common";
import { ProductItem } from "../components/product-page";
import { addFavoriteAction } from "../core/store";


const ProductPageView = ({ activeProduct, addFavorite }) => {
    // When the page is refreshed, it renders the last selected product saved in SessionStorage
    const checkSessionStorage = sessionStorage.getItem('activeProduct');
    const savedActiveProductFromSessionStorage = JSON.parse(checkSessionStorage);

    //Renders either the product just selected by the user, or the last saved one from SessionStorage
    const product = activeProduct || savedActiveProductFromSessionStorage;

    if (product) return (
        <>
            <Header />
            <ProductItem activeProduct={product} addFavoriteHandler={addFavorite} />
            <Footer />
        </>
    )

    return <p className="container min-h-screen flex items-center justify-center">Щось пішло не так( <br /> Виберіть спочатку товар із каталогу</p>
}

const mapState = (state) => ({
    activeProduct: state.activeProduct,
});

const mapDispatch = (dispatch) => ({
    addFavorite: (product) => dispatch(addFavoriteAction(product))
})

export const ProductPage = connect(mapState, mapDispatch)(ProductPageView);