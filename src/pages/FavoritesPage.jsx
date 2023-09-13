import { connect } from "react-redux"
import { Footer, Header } from "../components/common"
import { FavoritesList, InputForm } from "../components/favorites-page"
import { deleteFromFavoriteAction } from "../core/store"

const FavoritesPageView = ({ favoriteList, deleteFromFavorite }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <FavoritesList favoriteList={favoriteList} deleteFromFavorite={deleteFromFavorite} />
            {favoriteList.length ? <InputForm /> : null}
            <Footer />
        </div>
    )
}

const mapState = (state) => ({
    favoriteList: state.favoritesList
})

const mapDispatch = (dispatch) => ({
    deleteFromFavorite: (product) => dispatch(deleteFromFavoriteAction(product))
})
export const FavoritesPage = connect(mapState, mapDispatch)(FavoritesPageView);