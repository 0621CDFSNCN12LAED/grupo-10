import React from "react";
import ContentUser  from "../ContentUser/ContentUser";
import ContentProduct from "../ContentProduct/ContentProduct";
import { Link, Route, Switch } from 'react-router-dom'


function ContentBody (){
    return (
        <div>
             <nav>
                <button className = "style-button"><Link to="/Usuarios"> Usuarios </Link></button>
                <button className = "style-button"><Link to="/Productos"> Productos </Link></button>
            </nav>
            <Switch>
                <Route exact path="/Usuarios" component= { ContentUser }/>
                <Route exact path="/Productos" component= { ContentProduct }/>
            </Switch>
           
        </div>
    )
}

export default ContentBody