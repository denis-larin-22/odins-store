import { Footer, Header } from "../components/common"
import { FavoritesList } from "../components/favorites-page"

export const FavoritesPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <FavoritesList />
            <Footer />
        </div>
    )
}