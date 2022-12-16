import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import bootstrap from "bootstrap";

function Post(props){
    const [post, setPost] = useState([]);
    let { id } = useParams(); 
    useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((response) => {
        setPost(response.data);
    })
    },[]);

    return (
        <div className="container">
        <h1>{post.title}</h1>
        <p> {post.content}</p>
        </div>
    )
}
export default Post;