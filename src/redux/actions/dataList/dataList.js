// -- actions

import {fetchDataListApi} from "../../service/main";

export const fetchDataListAction = (payload)=>({type:"FETCH_DATA_LIST",payload})


// -- actionCreators


export const fetchDataList = (category,count,limit) => {
    return async (dispatch) => {
        await fetchDataListApi(category,count,limit).then(r => {
            dispatch(fetchDataListAction(r.data))
        })
    }
}