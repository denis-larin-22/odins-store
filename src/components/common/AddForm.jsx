import { Button, Radio, RadioGroup, Switch } from "@nextui-org/react"
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../api/firebase";

export const AddForm = () => {
    const [name, setName] = useState('');
    const [sizes, setSizes] = useState('');
    const [gender, setGender] = useState(null);
    const [season, setSeason] = useState(null);
    const [bestseller, setBestseller] = useState(false);
    const [newProduct, setNewProduct] = useState(false);
    const [info, setInfo] = useState('');

    const productsCollectionRef = collection(db, "products");

    const createUser = async (newProd) => {
        await addDoc(productsCollectionRef, newProd);
    }



    const btnHandler = () => {
        const createProduct = {
            bestseller,
            gender,
            info,
            name,
            newProduct,
            oldPrice: null,
            price: null,
            season,
            sizes
        }
        console.log(createProduct);
        createUser(createProduct);
    }



    return (
        <div className="">
            <input type="text" placeholder="Имя:" value={name} onChange={(e => setName(e.target.value))} />
            <input type="text" placeholder="Размеры:" value={sizes} onChange={(e => setSizes(e.target.value))} />

            <RadioGroup
                label="Пол:"
                value={gender}
                onChange={e => setGender(e.target.value)}
            >
                <Radio value="male">мужские</Radio>
                <Radio value="female">женские</Radio>
                <Radio value="teenager">подросток</Radio>
            </RadioGroup>
            <RadioGroup
                label="Сезон:"
                value={season}
                onChange={e => setSeason(e.target.value)}
            >
                <Radio value="winter">winter</Radio>
                <Radio value="summer">summer</Radio>
                <Radio value="demi-season">demi-season</Radio>
            </RadioGroup>
            <Switch isSelected={bestseller} onChange={e => setBestseller(e.target.checked)}>
                Бестселлер
            </Switch><br />
            <Switch isSelected={newProduct} onChange={e => setNewProduct(e.target.checked)}>
                Новинка?
            </Switch><br />
            <input type="text" placeholder="Описание" className="h-[400px] w-[500px] border-[2px] border-black" value={info} onChange={(e => setInfo(e.target.value))} />
            <Button onClick={btnHandler}>Отправить</Button>
        </div>
    )
}