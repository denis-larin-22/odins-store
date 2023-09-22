import { getFromPublic } from "../../_utils";

export const Filters = ({ list, getFilter }) => {
    const filters = [
        {
            name: 'male',
            text: 'Чоловіче взуття',
            img: getFromPublic('/assets/common/male-shoes.jpg'),
            count: list.filter(item => item.gender === 'male').length
        },
        {
            name: 'female',
            text: 'Жіноче взуття',
            img: getFromPublic('/assets/common/female-shoes.jpg'),
            count: list.filter(item => item.gender === 'female').length
        },
        {
            name: 'teenager',
            text: 'Підліткове взуття',
            img: getFromPublic('/assets/common/teenage-shoes.jpg'),
            count: list.filter(item => item.gender === 'teenager').length
        },
    ]

    const declinationByNumber = (number) => {
        const cases = [2, 0, 1, 1, 1, 2];
        const words = ['товар', 'товара', 'товарiв'];
        const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
        return `${words[index]}`;
    }

    return (
        <section className="container flex justify-center gap-4">
            {
                filters.map((item, index) => (
                    <div
                        key={item.name + index}
                        className="max-w-[200px] flex flex-col items-center cursor-pointer"
                        onClick={() => getFilter(item.name)}
                    >
                        <img src={item.img} alt="male shoes" className="min-w-full max-h-[200px]" />
                        <p variant="light" className="text-small md:text-medium text-center font-bold">
                            {item.text}
                        </p>
                        <p variant="light" className="text-small text-gray-500">
                            {item.count} {declinationByNumber(item.count)}
                        </p>
                    </div>
                ))
            }
        </section>
    );
}