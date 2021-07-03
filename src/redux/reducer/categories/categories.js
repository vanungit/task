const initialState = {
    categories: [],
    dataList: []
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
            }
        case "FETCH_DATA_LIST":
            return {
                ...state,
                dataList: action.payload,
            }


        default:
            return state;
    }
};










