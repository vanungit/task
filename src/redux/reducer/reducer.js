// import external modules
import {combineReducers} from "redux";
import { mainReducer} from "./categories/categories";



const reducer = combineReducers({
    main:mainReducer,

});

export default reducer;

