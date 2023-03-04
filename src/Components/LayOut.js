import React, { Component } from "react";
import Home from "./Home";
import Catalog from "./Catalog";
import Inventory from "./Inventory";
import { Outlet, Link } from "react-router-dom";
import "../CSS/Header.css"


class LayOut extends Component{
    render()
    {
        return (<>   
        <Link to="/" className="Header"><Home/></Link>
                <Link to="/Catalog" className="Header"><Catalog /></Link>
                <Link to="/Inventory" className="Header"><Inventory /></Link>
       
        
        </>);
    }
}
export default LayOut