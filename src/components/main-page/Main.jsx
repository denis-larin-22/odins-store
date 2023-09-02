import { getFromPublic } from "../../_utils/getFromPublic";

export const Main = () => {
    const mainBcgPath = getFromPublic('/assets/main-page/main-bcg.png');

    const advantages = [
        "отличное качество",
        "приятный материал",
        "доставка по всему миру"
    ]

    return (
        <div className="relative h-[90vh] main-top-shadow">
            <img src={mainBcgPath} alt="main-bcg" className="absolute top-0 -z-10 w-full h-full object-cover" />
            <main className="h-full container flex flex-col items-center">
                <div className="h-full flex flex-col items-center justify-center">
                    <h1 className="text-xxl-size uppercase ">420 four two</h1>
                    <p className="text-md-size text-center lowercase">Дизайнерская одежда, вдохновлённая уличной культурой</p>
                </div>
            </main>
            <ul className="static sm:absolute right-0 sm:right-[15%] sm:bottom-[-50px] lg:bottom-[-120px] p-[50px] py-[35px] bg-black max-w-full sm:max-w-[450px] flex flex-col self-center md:self-end gap-[25px] text-medium sm:text-md-size leading-normal">
                {advantages.map((text, index) => (
                    <li key={index} className="flex items-center gap-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="29" viewBox="0 0 16 29" fill="none">
                            <path d="M0.664062 0.677673V28.3275H3.31845L15.595 16.635V0.677673H0.664062ZM13.383 15.6882L2.87605 25.6953V2.89114H13.383V15.6882Z" fill="white" />
                        </svg>
                        <p className="">{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
} 