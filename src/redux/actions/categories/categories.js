// -- actions
import {fetchCategoriesApi} from "../../service/main";

export const fetchCategoriesAction = (payload)=>({type:"FETCH_CATEGORIES",payload})


// -- actionCreators


export const fetchCategories = () => {
    return async (dispatch) => {
        await fetchCategoriesApi().then(r => {
            dispatch(fetchCategoriesAction(r.data))
        })
    }
}