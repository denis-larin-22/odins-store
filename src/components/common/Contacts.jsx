import { Tooltip } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";

export const Contacts = ({ numberView = true, emailView = true }) => {
    const telephoneLogo = getFromPublic('/assets/common/telephone.png');
    const mailLogo = getFromPublic('/assets/common/mail.png');
    const pStyles = 'text-mob-xl-size sm:text-xl-size pt-[10px] sm:pt-[20px]'

    return (
        <div className="container text-xl-size">
            {numberView &&
                <Tooltip placement="bottom" showArrow size="lg" color="success" content="Номер для заказа">
                    <div className="max-w-fit flex flex-wrap items-center gap-x-4 mb-[30px]">
                        <img src={telephoneLogo} alt="Telephone number" />
                        <a href="/" className={pStyles}>+38 098 444 7777</a>
                    </div>
                </Tooltip>
            }

            {emailView &&
                <div className={`flex flex-wrap items-center gap-x-4 ${pStyles}`}>
                    <img src={mailLogo} alt="eMail" />
                    odins-store@gmail.com
                </div>
            }
        </div>
    )
}