import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

//Returns array of images from folder {folderName}/views in Firebase Storage
export const getViewsFromFirebase = async (folderName) => {
    const storageRef = ref(storage, `/${folderName}/views`);
    const result = await listAll(storageRef);

    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
    return Promise.all(urlPromises);
};