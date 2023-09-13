import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

//!!!
export const getProductsFromStorage = async () => {
    const productsCollectionRef = collection(db, "products");
    const data = await getDocs(productsCollectionRef);
    
    const arrayProducts = data.docs.map((doc) => ({ 
        ...doc.data(),
        id: doc.id,
    }));
    
    return arrayProducts;
}













// export const getProducts = () => {
//   return async (dispatch) => {
//     const productsCollectionRef = collection(db, "products");
//     const data = await getDocs(productsCollectionRef);
//     const arrayProducts = data.docs.map((doc) => ({ 
//         ...doc.data(),
//         id: doc.id,
//     }));
    
//     dispatch(getProductListAction(arrayProducts));
//   }
// }





//CRUD

// const createUser = async () => {
//   await addDoc(usersCollectionRef, { name: newName, age: newAge });
//   setNewName('');
//   setNewAge(0);
// }

// const updateUser = async (id, age) => {
//   const userDoc = doc(db, "users", id)
//   const newField = { age: age + 1 }
//   await updateDoc(userDoc, newField)
// }

// const deleteUser = async (id) => {
//   const userDoc = doc(db, "users", id)
//   await deleteDoc(userDoc);
// }