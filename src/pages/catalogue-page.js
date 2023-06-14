import React from "react";
import Product from './../components/Product'


const CataloguePage = (props) => {
    const {stackPlatform, setStackPlatform} = props


    const {shops} = props
    if(!shops) return null;
    return(
    <div className="row">
       
       <h1>Каталог товаров</h1>
        <div className="fields">
            {
        shops.map((shop, idx)=>
            <div className="col m3 s12" key={shop.id}>
            <Product 
                key={shop.id} 
                shops={shops}
                setShop={props.setShop}
                shop={shop}
                platformCopy={stackPlatform[idx]}
                stackPlatform={stackPlatform}
                setStackPlatform={setStackPlatform}
                setPlatform={props.setPlatform}
                {...shop}
                
                />
            </div>
        )}
        </div>
    </div>
    )
}

export default CataloguePage;