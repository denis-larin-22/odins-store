import { getFromPublic } from '../../_utils/getFromPublic';
import { ProductCard } from '../common';
import './styles/index.css';

export const LeaderProducts = () => {
    const banner = getFromPublic(`/assets/main-page/new-products/product4.png`);

    return (
        <>
            <div className="py-[10px] bg-black">
                <p className="container text-white text-xxl-size uppercase">Лидеры продаж</p>
            </div>
            <ul className="container columns-1 md:columns-2 lg:columns-4">
                {[1, 2, 3, 4].map((product, index) => (
                    <li key={index} className="">
                        <ProductCard product={banner} />
                    </li>
                ))}
            </ul>
        </>
    )
}