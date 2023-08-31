import { Footer } from '../../common/Footer';
import { AboutSection } from './components/AboutSection';
import { Info } from './components/Info';
import { Main } from './components/Main';
import { NewProducts } from './components/NewProducts';
import './index.css';

export const MainPage = () => {


    return (
        <div className="">
            <Main />
            <AboutSection />
            <NewProducts />
            <Info />
            <Footer />
        </div>
    )
}