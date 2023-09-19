import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";

export const QuestionModal = ({ styles }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const initForm = {
        name: '',
        number: '',
        message: ''
    }

    const [inputValues, setInputValues] = useState(initForm);
    const [validationState, setValidationState] = useState('valid');

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

    // const { name, number } = inputValues;

    const isValid = () => {
        const { name, number } = inputValues;

        if (validateName(name) && validatePhoneNumber(number)) {
            setValidationState('valid');
            // btnHandler(inputValues)
            setInputValues({ name: '', number: '', message: '' });
        } else {
            setValidationState('invalid')
        }

    }

    return (
        <>
            <Button onPress={onOpen} className="fixed z-10 bottom-2 md:bottom-12 right-2 md:right-12 min-w-[30px] h-[60px] rounded-[50%] bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="white"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            </Button>
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Виникли питання?</ModalHeader>
                            <ModalBody>
                                <Input
                                    validationState={validationState}
                                    isRequired
                                    size="lg"
                                    value={inputValues.name}
                                    onChange={({ target }) => setInputValues({ ...inputValues, name: target.value })}
                                    variant="bordered"
                                    type="text"
                                    label="Ім'я"
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
                                    label="Номер телефону"
                                    className="max-w-[400px]"
                                />
                                <Input
                                    size="lg"
                                    value={inputValues.message}
                                    isRequired
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
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}