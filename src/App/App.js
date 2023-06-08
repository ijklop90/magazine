import React, {useState} from "react";
import Navbar from "../components/Navbar";
import {UnitPage, MainPage, CataloguePage, ShopPage } from "../pages";
import './app.css'
import data from '../data.json'


import { Route, Routes } from "react-router-dom";

const App = () => {
const [shops, setShops] = useState(data)

    return (
        <div className="app-main">
            <Navbar  setShops={setShops} shops={shops} />
            
            <div className="container main white-text">
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/cat" element={<CataloguePage shops={shops} setShop={setShops} />}/>
                    <Route path="/cat/:id" element={<UnitPage shops={shops} setShop={setShops}/>}/>
                    <Route path="/shop" element={<ShopPage shops={shops} setShops={setShops} />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;