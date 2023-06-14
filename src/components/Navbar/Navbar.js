import React, {useState} from "react";
import { Link } from "react-router-dom";
import Popup from '../Popup'
import logo from '../../img/logo.png'
import './navbar.css'

const Navbar = (props)=>  {
  const [toggle, setToggle] = useState(false)
  const {shops, stackPlatform, setStackPlatform} = props

  if(!shops) return null;
return(
  <nav className="nav-main">
    <div className="nav-wrapper">
      <a href="/magazine" className="brand-logo">
        <div>
          <img className="logo" alt="Logo" src={logo}></img> <span className="logo-text hide-on-med-and-down">Shoppy Alliance</span>
          </div>
          </a>
      <ul id="nav-mobile" className="right">
      {toggle && (
        <li>
          <ul className="collection popup z-depth-3">
            {stackPlatform.map((platform, idx)=>
              platform.find(el=>el===true)
                ?
                <Popup 
                  key={idx}
                  id={idx}
                  shops={shops} 
                  platform={platform}
                  stackPlatform={stackPlatform}
                  setStackPlatform={setStackPlatform}
                />
              :
              platform)}


          {toggle && 
          stackPlatform.map(platform=>
          platform.find(el=>el===true))
          ? <Link onClick={()=> setToggle(!toggle)}
            className="btn waves-effect shop-link" 
            to="/magazine/shop">
              ОФОРМИТЬ ЗАКАЗ
          </Link>
         :
         <li className="popup-li collection-item avatar">
          <div className="row">
          Корзина пуста
          </div>
         </li>}
          </ul>
        </li>)}
        <li >
          <Link id="indicator" onClick={()=> setToggle(!toggle)} to="#"> 
            <i className="material-icons">shopping_cart</i>{toggle}
          </Link>
        </li>
        <li className="right hide-on-med-and-down" key="1"><Link to="/magazine">Главная</Link></li>
        <li className="right hide-on-med-and-down" key="2"><Link to="/magazine/cat">Каталог</Link></li>
      </ul>
    </div>
  </nav>
)
}

export default Navbar;