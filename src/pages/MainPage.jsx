import { Footer, Header } from "../components/common";
import { AboutSection, Info, Main, NewProducts } from "../components/main-page/components";


export const MainPage = () => {
    return (
        <>
            <Header />
            <Main />
            <AboutSection />
            <NewProducts />
            <Info />
            <Footer />
        </>
    )
}