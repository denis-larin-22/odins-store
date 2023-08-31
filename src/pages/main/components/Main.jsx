import { getFromPublic } from "../../../_utils/getFromPublic";
import { Header } from "../../../common";
import { Quotes } from "./Quotes";

export const Main = () => {
    const mainBcgPath = getFromPublic('/assets/main-page/main-bcg.png');

    const advantages = [
        "отличное качество",
        "приятный материал",
        "доставка по всему миру"
    ]

    return (
        <div className="relative h-screen main-top-shadow">
            <img src={mainBcgPath} alt="main-bcg" className="absolute top-0 -z-10 w-full h-full object-cover" />
            <main className="container h-full flex flex-col items-center justify-between">
                <Header />

                <div className="flex flex-col items-center">
                    <h1 className="text-xxl-size uppercase">420 four twoO</h1>
                    <p className="text-md-size lowercase">Дизайнерская одежда, вдохновлённая уличной культурой</p>
                </div>

                <ul className="relative bottom-[-120px] px-[50px] py-[35px] bg-black max-w-[450px] flex flex-col self-end gap-[25px] text-md-size leading-normal">
                    {advantages.map((text, index) => (
                        <li key={index} className="flex items-center gap-[12px]">
                            <Quotes />
                            <p className="">{text}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
} 