import { getProductListAction } from "../core/store";
import { getProductsFromStorage, getViewsFromStorage } from "./firebase"

export const getProductsListFromFirebase = () => {
    return async (dispatch) => {
        const list = await getProductsFromStorage();
//images
        const listWithImages = list.map(async (product) => {
            const urlImageList = await getViewsFromStorage(product.name);
            return {
                ...product,
                images: urlImageList
            }
        });
//
        const result = await Promise.all(listWithImages);
        dispatch(getProductListAction(result));
    }
}



//First version 

// export const getProductsListFromFirebase = () => {
//     return async (dispatch) => {
//         const list = await getProductsFromStorage();
// //images
//         const listWithImages = list.map((product) => {
//             return getViewsFromStorage(product.name)
//                 .then(urlImageList => ({
//                     ...product,
//                     images: urlImageList
//                 }))
//         });

// //
//         // dispatch(getProductListAction(listWithImages));
//         const result = await Promise.all(listWithImages);
//         dispatch(getProductListAction(result))
//     }
// }