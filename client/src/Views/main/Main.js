import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// helpers
import { fetchData } from "../../common/utils/common";
import { urls } from "../../common/utils/config";

// import "./Main.css";
import Blog from "../../common/blog/Blog";

const Main = () => {
    const [ mainData, setMainData ] = useState([]);
    const styles = {
        height: "200px"
    };

    useEffect (() => {
        fetchData (urls.baselocalhost + urls.blogs).then( (data) => { setMainData(data.blogs) } );   
    }, []);


    return (
        
        <div>
            <div className="header">
                <h2>Main</h2>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    { mainData.length > 0 && mainData.map(( { title, short_description, description, contentPath }, index ) => (
                        <Blog
                            key = { title + index }
                            title = { title }
                            index = { index }
                            short_description = { short_description }
                            description = { description }
                            contentPath = { contentPath }
                        />
                    )) }
                </div>                  
            </div>
            <div className="footer">
                <h2>Footer</h2>
            </div>
        </div>
    )
}
export default Main;
