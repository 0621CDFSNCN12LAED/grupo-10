import React from "react";

function Footer ( ) {
    return (
    <div>
    <footer >
        <div className= "footer-div">
        <div className = "iconFooter"><i className="fab fa-whatsapp-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="far fa-envelope"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-facebook-square"></i>
        </div>
    <div className= "footer-cont-mapa">
        <div className= "footer-contacto">
            <h2>CONTACTOS</h2>
                <ul>
                    <li><p><i className="fas fa-phone-volume"></i>: 011 75368987</p></li>
                    <li><p><i className="fas fa-mail-bulk"></i>: DECOAR@GMAIL.COM</p></li>
                    <li><p><i className="fas fa-map-marked-alt"></i>: CALLE FALSA 123</p></li>
                </ul>
            </div>
        <div className= "mapa">
        <div className="mapouter"><div className="gmap_canvas"> </div>
        </div>
    </div>
    </div>
        </div>
    </footer>
    </div>
    )
}

export default Footer;