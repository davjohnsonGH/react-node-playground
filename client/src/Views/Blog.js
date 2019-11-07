import React, { useEffect, useState } from "react";
import { useParams} from "react-router";
import { Link } from "react-router-dom";
// helpers
import { fetchData } from "../common/common";
import { urls } from "../common/config";

import "./Main.css";
import BlogComponent from "../common/blog/Blog";

const Blog = (props) => {
    const [ blogData, setBlogData ] = useState([]);
    const { id } = useParams();
    console.log(id, props)
    const styles = {
        height: "200px"
    };

    useEffect (() => {

        fetchData (urls.baselocalhost + urls.blog).then( (data) => { setBlogData(data.blog) } );   

    }, [ id ]);

    const { title, short_description, description, contentPath } = blogData;
    return (
        
        <div>
            <div className="header">
                <h2>{ id }</h2>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    
                    <BlogComponent
                        id = {id}
                        title = { title }
                        short_description = { short_description }
                        description = { description }
                        contentPath = { contentPath }
                        
                    />
        
                </div>                  
            </div>
            <div className="footer">
                <h2>Footer</h2>
            </div>
        </div>
    )
}
export default Blog;



