import { addFavoriteAction, deleteFromFavoriteAction, filterListAction, getProductListAction, resetFilterAction, setActiveProductAction } from "./actions";

const lastActiveProduct = JSON.parse(sessionStorage.getItem('lastActiveProduct'));
const savedFavoriteList = JSON.parse(localStorage.getItem('savedFavoriteList'));

const initState = {
    activeProduct: lastActiveProduct || null,
    productList: [],
    catalogList: null,
    favoritesList: savedFavoriteList || []
}


export const reducer = (state = initState, action) => {
    switch (action.type) {
        case getProductListAction.TYPE:
            return {
                ...state,
                productList: action.payload,
                catalogList: action.payload,
            }

        case setActiveProductAction.TYPE:  
            //Saving to prevent page rendering error due to missing active product during refreshing in ProductPage
            sessionStorage.setItem('lastActiveProduct', JSON.stringify(action.payload))

            return {
                ...state,
                activeProduct: action.payload
            }
//FavoriteList
        case addFavoriteAction.TYPE:
            const favoriteList = [...state.favoritesList, action.payload];
            //Saving the last state of favorite list to prevent losing it during refreshing in FavoritesPage
            localStorage.setItem('savedFavoriteList', JSON.stringify(favoriteList));

            return {
                ...state,
                favoritesList: favoriteList
            }

        case deleteFromFavoriteAction.TYPE:
            const updatedFavoriteList = state.favoritesList.filter(product => product !== action.payload);
            //Update the last state in the localStorage
            localStorage.setItem('savedFavoriteList', JSON.stringify(updatedFavoriteList));

            return {
                ...state,
                favoritesList: updatedFavoriteList
            }
//Filter
        case filterListAction.TYPE:
            const {productList} = state;
            const {season, gender} = action.payload;
            let catalogList;

            if (season !== '' && gender === '') {
                catalogList = productList.filter(item => item.season === season)
            } else if (season === '' && gender !== '') {
                catalogList = productList.filter(item => item.gender === gender)
            } else if (season !== '' && gender !== '') {
                catalogList = productList.filter(item => item.gender === gender && item.season === season);
            }

            return {
                ...state,
                catalogList: catalogList
            }

        case resetFilterAction.TYPE:
            return {
                ...state,
                catalogList: state.productList,
            }

        default:
            return state;
    }
}