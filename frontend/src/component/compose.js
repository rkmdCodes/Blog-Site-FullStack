import React from "react";
import axios from "axios";

function Compose(){
    function handleSubmit(event){
        event.preventDefault();
        const titleText = event.target[0].value;
        const contentText = event.target[1].value;
        axios.post('http://localhost:5000/compose',{
            title:  titleText,
            content: contentText
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return (
        <div className="container">
            <h1>Compose</h1>
            <form onSubmit={handleSubmit} method="post">
                <div className="form-group">
                    <label htmlFor="postTitle" className="form-label">Title :</label>
                    <input type="text" name="postTitle" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="postBody" className="form-label">Post :</label>
                    <textarea  className="form-control" name="postBody" rows="4"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Compose;