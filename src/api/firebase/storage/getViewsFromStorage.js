import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

//Returns array of images from folder {folderName}/views in Firebase Storage
export const getViewsFromStorage = async (folderName) => {
    const storageRef = ref(storage, `/${folderName}`);
    const result = await listAll(storageRef);

    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
    const images = await Promise.all(urlPromises);
    return images;
};