import React from "react";
import { Link } from "react-router-dom";

function Posts(props){
    // console.log(typeof(props.content));
    let content = "";
    if(props.content !== undefined){
         content = props.content.slice(0, 100) + (props.content.length > 100 ? "..." : "");
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{content}
            <Link to={`/posts/${props.id}`}>
            Read more
            </Link>
            </p>
        </div>
    )
}
export default Posts;
