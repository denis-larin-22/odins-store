import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Contacts } from "../common";
import { motion } from "framer-motion";

export const InputForm = ({ btnHandler }) => {
    const initForm = {
        name: '',
        number: '',
        message: ''
    }

    const [inputValues, setInputValues] = useState(initForm);
    const [validationState, setValidationState] = useState('valid');
    const [toggleVisible, setToggleVisible] = useState(true);

    const validateName = (name) => {
        // Имя может содержать только буквы и пробелы, длина от 2 до 50 символов
        const regex = /^[A-Za-zА-Яа-я\s]{2,50}$/;
        return regex.test(name);
    }

    const validatePhoneNumber = (phoneNumber) => {
        // Номер телефона должен быть в формате чисел XXXXXXXXXX
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
    }

    const isValid = () => {
        const { name, number } = inputValues;

        if (validateName(name) && validatePhoneNumber(number)) {
            setValidationState('valid');
            console.log(inputValues);
            // btnHandler(inputValues)
            setInputValues({ name: '', number: '', message: '' });
            setToggleVisible(false);
        } else {
            setValidationState('invalid')
        }

    }

    return (
        <div className="container">
            {toggleVisible
                ?
                <div className="text-xl-size flex flex-col gap-[30px]">
                    <p className="">Оставить заказ на сайте:</p>
                    <Input
                        validationState={validationState}
                        isRequired
                        size="lg"
                        value={inputValues.name}
                        onChange={({ target }) => setInputValues({ ...inputValues, name: target.value })}
                        variant="bordered"
                        type="text"
                        label="Name"
                        className="max-w-[400px]"
                    />
                    <Input
                        validationState={validationState}
                        isRequired
                        size="lg"
                        value={inputValues.number}
                        onChange={({ target }) => setInputValues({ ...inputValues, number: target.value })}
                        variant="bordered"
                        type="text"
                        label="Number"
                        className="max-w-[400px]"
                    />
                    <Input
                        size="lg"
                        value={inputValues.message}
                        onChange={({ target }) => setInputValues({ ...inputValues, message: target.value })}
                        variant="bordered"
                        type="text"
                        label="Залиште повідомлення"
                        className="max-w-[400px]"
                    />
                    <Button
                        size="lg"
                        className="max-w-fit rounded-none mb-[40px] py-[12px] px-[47px] bg-black text-white border-[2px] border-black hover:bg-white hover:text-black text-large"
                        onClick={isValid}
                    >
                        Відправити
                    </Button>
                </div>
                :
                <div className="mb-[50px] flex items-center justify-center gap-x-2 text-mob-xl-size md:text-xl-size">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="120px"
                        viewBox="0 0 24 24"
                        width="120px" f
                        fill="green"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></motion.svg>
                    <p className="text-center">
                        Дякуємо за заявку, ми зв'яжемося з вами найближчим часом!
                    </p>
                </div>
            }
            <Contacts />
        </div>
    )
}