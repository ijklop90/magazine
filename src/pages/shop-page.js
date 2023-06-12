import React, {useState} from "react";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
import './pages.css'

const ShopPage = (props)=> {
    const {shops, stackPlatform, setStackPlatform} = props
    const [visible, isVisible] = useState(true)
    const [open, isOpen] = useState(true)




    return(
        <div>
            {open && 
            <div>
            <ul className="collection shop-page z-depth-3">
            {stackPlatform.map((platform, idx)=>
              platform.find(el=>el===true)
                ?
                <Popup key={idx}
                shops={shops} 
                id={idx}
                setShops={props.setShops} 
                counts={props.counts}
                platform={platform}
                stackPlatform={stackPlatform}
                setStackPlatform={setStackPlatform}
                />
              :
              platform)}
            </ul>          
            {stackPlatform.map(platform=>
          platform.find(el=>el===true))?<Link 
                className="btn waves-effect shop-btn" 
                onClick={()=>{isVisible(!visible)}}
                >
                КУПИТЬ
            </Link>:isOpen(!open)}
            {!visible && <div id="modal-shop">
                <div className="modal-window">
                    <p className="black-text">Точно купить?</p>
                    <ul className="collection shop-page z-depth-3">
                    </ul> 
                    <form action="/magazine/success">
                        <button type="submit" className="btn waves-effect shop-btn" >Купить</button>
                    </form>
                </div>
            </div>}
            </div>}
        </div>
    )
}

export default ShopPage;