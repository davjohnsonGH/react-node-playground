import React, { useEffect, useState } from "react";
import { useParams} from "react-router";
import { Link } from "react-router-dom";
// helpers
import { fetchData } from "../../common/utils/common";
import { urls } from "../../common/utils/config";

import Blog from "../../common/blog/Blog";

const Section = (props) => {
    const [ sectionData, setSectionData ] = useState([]);
    const { id } = props;
    const styles = {
        height: "200px"
    };

    useEffect (() => {

        fetchData (urls.baselocalhost + urls.blogs).then( (data) => { setSectionData(data.blogs) } );   

    }, [ id ]);


    return (
        
        <div>
            <div className="header">
                <h2>{ id }</h2>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    {sectionData.length > 0 && sectionData.map(( { title, short_description, description, contentPath }, index) => (
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
export default Section;



