import { Tooltip } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";

export const Contacts = ({ numberView = true }) => {
    const telephoneLogo = getFromPublic('/assets/common/telephone.png');
    const pStyles = 'font-sans text-mob-xl-size sm:text-xl-size pt-[10px] sm:pt-[20px]'

    return (
        <div className="container text-xl-size">
            {numberView &&
                <Tooltip placement="bottom" showArrow size="md" color="primary" content="Номер для замовлення">
                    <div className="max-w-fit flex flex-wrap items-center gap-x-4 mb-[30px]">
                        <img src={telephoneLogo} alt="Telephone number" />
                        <p className={pStyles}>+380 96 603 9039</p>
                    </div>
                </Tooltip>
            }
        </div>
    )
}