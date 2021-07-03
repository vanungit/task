import React from "react"
import {Link} from "react-router-dom";
import "./categories.scss"


const Categories = ({categories}) => {
    return (
        <nav>
            <ul className="navbar">
                {categories.map(n => {
                    const url = `/${n.name}`
                    return (
                        <li key={n.id}>
                            <Link to={url}>{n.name}</Link>
                        </li>
                    )})
                }
            </ul>
        </nav>
    )
}
export default Categories