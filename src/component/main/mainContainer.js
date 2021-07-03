import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/actions/categories/categories";
import Categories from "../categories/categories";
import DataList from "../dataList/dataList";
import {fetchDataList} from "../../redux/actions/dataList/dataList";
import {useHistory} from "react-router";
import "./main.scss"


const MainContainer = ({urls}) => {

    let history = useHistory()

    const {categories, dataList} = useSelector(r => r.main)

    const [name, setName] = useState()
    const [count, setCount] = useState(1)

    const limit = 10

    useEffect(() => {

        if (urls) {
            let a = categories.filter(n => n.name === urls.slice(1))
            setName(a[0])
        }

    }, [urls])

    useEffect(() => {

        !categories.length && history.push("/")

    }, [])

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchCategories())

    }, [])

    useEffect(() => {

        name && dispatch(fetchDataList(name, count, limit))

    }, [urls, name, count])

    const handleShowMore = () => {

        setCount(prev => prev + 1)
        window.scrollTo(0, 0)

    }

    return (
        <>
            <Categories categories={categories}/>
            <div className="container">
                {dataList.map(n => <DataList key={n.id} data={n}/>)}
            </div>
            <div className="button">
                {dataList.length ? <button onClick={() => handleShowMore()}>Show more 10</button> : null}
            </div>
        </>
    )
}
export default MainContainer