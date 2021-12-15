import React from 'react';
import carrusel1 from "../../assets/images/carruselv1.jpeg"
import carrusel3 from "../../assets/images/carruselv3.jpeg"
import carrusel4 from "../../assets/images/carruselv4.jpeg"
function Carrucel  (){
    return(

        <div>
            <div className= "carrusel">
            <ul className= "slide-menu">
                <li className="items">
                    <img  src= {carrusel1} alt="carruselv1" width="100%" height="100%" />
                </li>

                <li className="items">
                <img  src= {carrusel3} alt="carruselv3" width="100%" height="100%"/>
                </li>

                <li className="items">
                    <img  src= {carrusel4} alt="carruselv4" width="100%" height="100%" />
                </li>
            </ul>

        </div>

        </div>
    )
}

export default Carrucel;