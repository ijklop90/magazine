import React, {useState}  from "react";
import { getIcons } from "../../services/services-workers";


const Button = (props) => {

    const [activateState, setActivateState] = useState(true)
    const {
        shop, 
        id,
        platformCopy,
        stackPlatform,
        setStackPlatform
    } = props
    
    const [platform, setPlatform] = useState(platformCopy)
    
    const switcher = (id) => {
        const newData = shop.platform.map((el, idx)=> 
                        id===idx ? el=true:false)
        setPlatform(newData)
        addToPlatform(newData)
    }
    
    
    
    const clearProducts = () => {
        const currentId = id-1
        const newData = [false, false, false]
        const newArr = stackPlatform.map((el,id)=>
            id===currentId?el=newData:el)
        setPlatform(newData)
        addToPlatform(newArr)
    
    }
    const addToPlatform = (arr)=> {
        const currentId = id-1;
        const newArr = stackPlatform.map((el, idx)=> 
                        idx===currentId?el=arr:el)
        setStackPlatform(newArr)
    }
        return(
        <div className="wrap-shop">
        {shop.platform.map(
            (el, idx)=> 
        <button key={idx}
            onClick={()=>{
                
                setActivateState(!activateState)
                switcher(idx)}}
                
            className={`waves-effect ${platform[idx]? 'disabled': ' '} 
                product-btn platform col s3 waves-light btn`}
            >
                <img alt={idx} className={`icons`} src={getIcons(idx)}>
    
                </img>
        </button>
        )}    
        
        <button onClick={()=>{
            clearProducts()
        }}
            className={`waves-effect ${platform.map ? ' ': 'disabled'} product-btn col s3 waves-light btn red`}
            >
            <i className="material-icons">delete_forever</i>    
        </button> 
    </div>)
    }

export default Button;
