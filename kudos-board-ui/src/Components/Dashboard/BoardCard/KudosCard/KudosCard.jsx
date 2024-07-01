import React from "react";
import "../KudosCard/KudosCard.css";

function KudosCard({cardTitle, cardMessage, gifURL, cardAuthor}){
    return(
    <>
        <div className="kudosCard">
            <h1>{cardTitle}</h1>
            <p>{cardMessage}</p>
            <img src={gifURL}></img>
            <p>{cardAuthor}</p>
            <button className="upvote-button">Upvote</button>
            <button className="delete-button">Delete</button>
        </div>
    </>
    )
};

export default KudosCard;