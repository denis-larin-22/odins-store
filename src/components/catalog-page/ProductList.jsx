import { getFromPublic } from "../../_utils/getFromPublic";
import { ProductCard } from "../common";
import { Select, SelectItem } from "@nextui-org/react";

export const ProductList = () => {
    const banner = getFromPublic(`/assets/main-page/new-products/product4.png`)

    const season = ["лето", "зима", "демисизон"];
    const gender = ["для него", "для неё", "подросток"];

    return (
        <section className="container">
            <div className="pt-[20px] flex flex-col sm:flex-row max-w-lg gap-4">
                <Select
                    size="lg"
                    label="Сезон"
                    className="w-full"
                >
                    {season.map((season, index) => (
                        <SelectItem key={index + gender} value={season}>
                            {season}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    size="lg"
                    label="Для кого"
                    className="w-full"
                >
                    {gender.map((gender, index) => (
                        <SelectItem key={index + gender} value={gender}>
                            {gender}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            <ul className="columns-1 md:columns-2 lg:columns-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <li key={index} className="">
                        <ProductCard product={banner} />
                    </li>
                ))}
            </ul>
        </section>
    )
}