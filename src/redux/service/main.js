import axios from "axios";
export const url = "https://api.thecatapi.com/v1/";

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials:true
}

export const fetchCategoriesApi = () => {
    return axios.get(url + `categories`, {})
}
export const fetchDataListApi = (category,count,limit) => {
    const params = `limit=${limit}&page=${count}&category_ids=${category.id}`
    return axios.get(url + `images/search?${params}`, {})
}




