import React from "react"
import "./dataList.scss"

const DataList = ({data}) => {
    return (
        <img className="image" src={data.url} alt=""/>
    )
}
export default DataList