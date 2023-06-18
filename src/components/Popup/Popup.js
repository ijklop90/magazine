import React from "react";
import { getIcons } from "../../services/services-workers";
import './popup.css'

const Popup = (props) => {
const {
    id,
    shops,
    platform,
    stackPlatform,
    setStackPlatform
    } = props

const {url, name} = shops[id]

const removeProduct = () => {
    const newData = [false, false, false]
    const newArr = stackPlatform.map((el,idx)=>
        idx===id?el=newData:el)
    setStackPlatform(newArr)

}

const selectedValue = platform.indexOf(true)
    return(
        <li className="popup-li collection-item avatar">
            <div className="row">
            <div className="col s9">
                <img src={url} alt="" className="circle"></img>
                <p className="black-text">
                    <strong className="label">Title: {name}</strong><br/>
                <span>
                    <img alt={name} className="icon-popup" src={getIcons(selectedValue)}></img>
                </span>
            </p>
            </div>
            <div className="col s1">    
                <button onClick={()=>{
                    removeProduct()
                }}
                    className="waves-effect  waves-light btn" 
                    >
                    <i className="material-icons window-popup">delete_forever</i>    
                </button>
            </div>
            <div className="col s1 offset-s1"></div>
            </div>
        </li>
    )
}

export default Popup;

