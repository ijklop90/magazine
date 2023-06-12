import React  from "react";
import { useParams } from "react-router-dom";
import Unit from "../components/Unit/Unit";


const UnitPage = (props) => {
const {shops} = props
const id = useParams().id

    if(!shops) return null;

    return(
        <div className="row">
            <h1>Товар: {shops[id].name}</h1>
            {console.log(id)}
            <Unit 
                key={id}
                shops={shops}
                setShop={props.setShop}
                shop={shops[id]}
                id={id}
                {...shops[id]}
             />
        </div>
    )
}

export default UnitPage;