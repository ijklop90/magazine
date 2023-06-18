import React  from "react";
import { Link } from "react-router-dom";
import './product.css'
import Button from "../Button/Button";




const Product = (props) => {
    const {shop, id, name, url} = props
    const {platformCopy, stackPlatform, setStackPlatform} = props
    return (
        <div key={`key${id}`} className="col-s3">
            <div className="card post-card">
            <Link key={id} to={`${id-1}`}>
                    <img 
                        className="post-img" 
                        key={id+name} 
                        alt={id} 
                        src={url}>
                    </img>
                    <p 
                        className="title-post" 
                        key={id}>
                        {name}
                    </p>
            </Link>
        <Button
            shop={shop}
            id={id}
            platformCopy={platformCopy}
            stackPlatform={stackPlatform}
            setStackPlatform={setStackPlatform}
        />
        </div>
    </div>
    )
}

export default Product;
