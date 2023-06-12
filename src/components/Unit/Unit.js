import React  from "react";
import './unit.css'

const Unit = (props) => {
    const {id, url, title} = props
    
    return (
    <div className="fields col offset-s3 s6">
        <img id="post" className="post-img" alt={id} src={url}></img>
        <p>{title}</p>
    </div>
    )
}

export default Unit;