import { Footer, Header } from "../components/common"
import { FavoritesList, InputForm } from "../components/favorites-page"

export const FavoritesPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <FavoritesList />
            <InputForm />
            <Footer />
        </div>
    )
}