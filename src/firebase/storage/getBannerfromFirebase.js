import { getDownloadURL, ref, listAll } from "firebase/storage";
import { storage } from "../firebase";

//Returns array of images from folder {folderName}/banner in Firebase Storage
export const getBannerfromFirebase = async (folderName) => {
    const storageRef = ref(storage, `/${folderName}/banner`);
    const result = await listAll(storageRef);

    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

    return Promise.all(urlPromises);
};