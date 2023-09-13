import { createAction, createPayloadAction } from "../../_utils";

export const getProductListAction = createPayloadAction('GET_PRODUCT_LIST');
//Set active product item
export const setActiveProductAction = createPayloadAction('SET_ACTIVE_PRODUCT');
//Favorite list
export const addFavoriteAction = createPayloadAction('ADD_TO_FAVORITE_LIST');
export const deleteFromFavoriteAction = createPayloadAction('DELETE_FROM_FAVORITE_LIST')
//Filter catalog
export const filterListAction = createPayloadAction('GET_FILTERED_LIST');
export const resetFilterAction = createAction('RESET_FILTER');