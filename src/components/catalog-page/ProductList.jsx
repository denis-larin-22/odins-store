import { getFromPublic } from "../../_utils/getFromPublic";
import { ProductCard } from "../common";

export const ProductList = () => {
    const banner = getFromPublic(`/assets/main-page/new-products/product4.png`)

    return (
        <section className="">
            <ul className="container columns-3">
                {[1, 2, 3, 4, 4, 4, 4, 3, 4,].map((item, index) => (
                    <li key={item} className="">
                        <ProductCard product={banner} />
                    </li>
                ))}
            </ul>
        </section>
    )
}