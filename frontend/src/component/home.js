import React,{ useState, useEffect } from "react";
import Posts from "./posts"
import axios from "axios";
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

function Home(){
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:5000/").then((response) => {
        setItems(response.data);
        setLoading(false);
    })
    },[]);
    if (isLoading) {
        return <div className="container">Loading...</div>;
    }

    return (
        <div className="container">
            <h1>HOME</h1>
            <p>{homeStartingContent}</p>
            {items.map(function(post){
                if(post.title !== undefined){
                    return (<Posts
                        key = {post._id}
                        id = {post._id}
                        title={post.title}
                        content = {post.content}
                        />)
                } else {
                    return "";
                }
            })}
            <Posts />
        </div>
    )
}
export default Home;