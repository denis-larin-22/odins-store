import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

//Returns array of products from firestore in the "products" folder
export const getProducts = async () => {
    const productsCollectionRef = collection(db, "products");
    const data = await getDocs(productsCollectionRef);
    const arrayProducts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(arrayProducts);
    return arrayProducts;
  }