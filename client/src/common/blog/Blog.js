import React, { useEffect, useState } from "react";
import { useParams} from "react-router";
import { Link } from "react-router-dom";

const Blog = ( props ) => {
    const { title, short_description, description, contentPath, index } = props;

    const styles = {
        height: "200px"
    };

    return (

        <Link to="/" >
            <div className="card">
                <h2>{ title }</h2>
                <h5>{ short_description }</h5>
                <img className="fakeimg" style={ styles }/>
                <p>{ description }</p>
                <p>{ contentPath }</p>
            </div>
        </Link>

    )

}
export default Blog;