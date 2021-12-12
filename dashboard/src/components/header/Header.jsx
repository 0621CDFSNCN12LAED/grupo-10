import React from "react";

function Header () {
    return (
    <div>
        <div className= "header-flex"> 
            <img className="logo" src= "/img/logodecoar.jpg" alt="Logo"/>
        </div>
        <div>
            <ul>
                <li>QUIENES SOMOS</li>
                <li>TERMINOS Y CONDICIONES</li>
            </ul>
        </div>
    </div>

    )
}

export default Header;