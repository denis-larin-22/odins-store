import { addFavoriteAction, deleteFromFavoriteAction, filterListAction, getProductListAction, resetFilterAction, setActiveProductAction } from "./actions";


const initState = {
    activeProduct: null,
    productList: [],
    catalogList: [],
    favoritesList: []
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
            sessionStorage.setItem('activeProduct', JSON.stringify(action.payload))

            return {
                ...state,
                activeProduct: action.payload
            }
        
        case addFavoriteAction.TYPE:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.payload]
            }

        case deleteFromFavoriteAction.TYPE:
            return {
                ...state,
                favoritesList: state.favoritesList.filter(product => product !== action.payload)
            }

        case filterListAction.TYPE: 
            const {season, gender} = action.payload;
            let {catalogList} = state;

            if (season !== '' && gender === '') {
                catalogList = catalogList.filter(item => item.season === season)
                console.log('here', catalogList);
            } else if (season === '' && gender !== '') {
                catalogList = catalogList.filter(item => item.gender === gender)
                console.log('here', catalogList);
            } else if (season !== '' && gender !== '') {
                catalogList = catalogList.filter(item => item.gender === gender && item.season === season);
                if(!catalogList.length) catalogList = null;
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