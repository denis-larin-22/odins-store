import { connect } from "react-redux"
import { Footer, Header } from "../components/common"
import { FavoritesList, InputForm } from "../components/favorites-page"
import { deleteFromFavoriteAction, setActiveProductAction } from "../core/store"

const FavoritesPageView = ({ favoriteList, deleteFromFavorite, setActiveProduct }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <FavoritesList favoriteList={favoriteList} setActiveProduct={setActiveProduct} deleteFromFavorite={deleteFromFavorite} />
            {favoriteList.length ? <InputForm /> : null}
            <Footer />
        </div>
    )
}

const mapState = (state) => ({
    favoriteList: state.favoritesList
});

const mapDispatch = (dispatch) => ({
    deleteFromFavorite: (product) => dispatch(deleteFromFavoriteAction(product)),
    setActiveProduct: (product) => dispatch(setActiveProductAction(product)),
});

export const FavoritesPage = connect(mapState, mapDispatch)(FavoritesPageView);