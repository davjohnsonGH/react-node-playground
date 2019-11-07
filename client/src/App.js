import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "@babel/polyfill";
//helpers
import { fetchData } from "./common/common";
import { urls } from "./common/config";
// components 
import HorizontalNav from "./common/horizontalnav/HorizontalNav";

const App = () => {
    
    const [menuOptions, setMenuOptions] = useState([]);

    useEffect( () => {

        // fetch menu options
        fetchData (urls.baselocalhost + urls.menuoptions).then( (data) => { setMenuOptions(data) } );   

    }, [])

    return (
        
        <div>
            <HorizontalNav menuOptions = { menuOptions }/>
        </div>
    )

}

render(<App />, document.getElementById("root"));
