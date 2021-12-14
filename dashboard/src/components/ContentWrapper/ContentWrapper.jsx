import React from "react";
import Header from "../header/Header"
import ContentBody from "../ContentBody/ContentBody"
import Carrucel from "../Carrucel/Carrucel";
import Footer from "../footer/Footer"


function ContentWrapper () {
    return (
        <div>
        <Header />
        <Carrucel />
        <Footer />
        <ContentBody />
        </div>
    )

};

export default ContentWrapper;