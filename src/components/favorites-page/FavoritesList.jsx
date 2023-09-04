import { Button, Tooltip } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { Link as RouterLink } from "react-router-dom";

export const FavoritesList = () => {
    const banner = getFromPublic(`/assets/main-page/new-products/product7.png`);

    return (
        <ul className="container py-[30px]">
            {
                [1, 2, 3].map((product, index) => (
                    <li key={index} className="relative flex flex-col lg:flex-row items-center gap-[45px] py-[30px] border-t-1 border-black ">
                        <RouterLink to={"/favorites"}>
                            <img src={banner} alt="Product" className="max-w-[375px]" />
                        </RouterLink>
                        <div className="text-mob-xl-size md:text-xl-size flex flex-col self-start gap-y-[20px]">
                            <h2 className="">Name</h2>
                            <p className="text-gray-500">Prise</p>
                            <p>Sizes</p>
                        </div>
                        <Tooltip content="Delete" placement="left">
                            <button className="absolute top-[15px] right-[15px]">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2.20047C8.26875 2.20047 2 8.46922 2 16.2005C2 23.9317 8.26875 30.2005 16 30.2005C23.7313 30.2005 30 23.9317 30 16.2005C30 8.46922 23.7313 2.20047 16 2.20047ZM21.1688 21.5192L19.1063 21.5098L16 17.8067L12.8969 21.5067L10.8313 21.5161C10.6938 21.5161 10.5813 21.4067 10.5813 21.2661C10.5813 21.2067 10.6031 21.1505 10.6406 21.1036L14.7063 16.2598L10.6406 11.4192C10.6029 11.3734 10.5819 11.3161 10.5813 11.2567C10.5813 11.1192 10.6938 11.0067 10.8313 11.0067L12.8969 11.0161L16 14.7192L19.1031 11.0192L21.1656 11.0098C21.3031 11.0098 21.4156 11.1192 21.4156 11.2598C21.4156 11.3192 21.3938 11.3755 21.3563 11.4223L17.2969 16.263L21.3594 21.1067C21.3969 21.1536 21.4188 21.2098 21.4188 21.2692C21.4188 21.4067 21.3063 21.5192 21.1688 21.5192Z" fill="black" />
                                </svg>
                            </button>
                        </Tooltip>
                    </li>
                ))
            }
        </ul>
    )
}