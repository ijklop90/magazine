import React, {useState} from "react";
import Navbar from "../components/Navbar";
import {UnitPage, MainPage, CataloguePage, ShopPage } from "../pages";
import './app.css'
import vk from '../img/vk.png'

import data from '../data.json'


import { Link, Route, Routes } from "react-router-dom";

const App = () => {

    const getPlatforms = () => {
    const newData = data.map(el=>el.platform) 
    return newData 
}

const [shops, setShops] = useState(data)
const [stackPlatform, setStackPlatform] = useState(getPlatforms())



return (
        <div>
        <div className="app-main height-full">
            <Navbar  
                setShops={setShops} 
                shops={shops}
                stackPlatform={stackPlatform}
                setStackPlatform={setStackPlatform} />
            <div className="container main white-text">
                <Routes>
                    <Route path="/magazine" element={<MainPage />}/>
                    <Route path="/magazine/cat" 
                    element={
                        <CataloguePage 
                            shops={shops} 
                            setShop={setShops} 
                            stackPlatform={stackPlatform}
                            setStackPlatform={setStackPlatform}/>}/>
                    <Route path="/magazine/cat/:id" element={<UnitPage shops={shops} setShop={setShops}/>}/>
                    <Route path="/magazine/shop" element={<ShopPage 
                            shops={shops} 
                            setShops={setShops} 
                            stackPlatform={stackPlatform}
                            setStackPlatform={setStackPlatform}
                            />}/>
                            <Route path="/magazine/success" element={
                                <div>
                                    <h1>Успех!</h1>
                                </div>
                            }/>
                </Routes>
            </div>
            </div>
            <div id="footer">
                <div className="wrapper-footer">
                    <div className="copyright">© 2023 | Все права защищены |</div> 
                    <Link to={'#footer'} ><img class="logo-vk" alt={vk} src={vk}/></Link>
                </div>
            </div>
        </div>
    )
}

export default App;