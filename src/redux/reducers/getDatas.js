import { GET_CATEGORIES, GET_PRODUCTS } from "../types";

const initial_state = {
    products:null,
    categories:null,
}

const reducer = (state = initial_state,action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
                }
        default:
            return state
    }
}

export default reducer;