import React from "react";
import ContentUser  from "../ContentUser/ContentUser";
import ContentProduct from "../ContentProduct/ContentProduct";
function ContentBody (){
    return (
        <div>
            <ContentUser />
            <ContentProduct />
        </div>
    )
}

export default ContentBody