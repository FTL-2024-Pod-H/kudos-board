import React, { useState } from "react";
import "../KudosCard/KudosCard.css";
import CommentModal from "../../CommentModal/CommentModal";

function KudosCard({cardTitle, cardMessage, gifURL, cardAuthor, onDelete}){
    const [upvoteCount, setUpvoteCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const handleUpvoteClick = () => {
        setUpvoteCount(upvoteCount + 1);
    };

    const handleAddComment = (comment) => {
        setComments([...comments, comment]);
    };
    const handleShowComments = () => {
        setShowComments(true);
    };

    const handleCloseComments = () => {
        setShowComments(false);
    };

    return(
    <>
        <div className="kudosCard">
            <h1>{cardTitle}</h1>
            <p>{cardMessage}</p>
            <img src={gifURL} alt="GIF"/>
            <p>{cardAuthor}</p>
            <button className="kudos-upvote-button" onClick={handleUpvoteClick}>Upvote: {upvoteCount}</button>
            <button className="kudos-delete-button" onClick={onDelete}>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          Delete
        </button>
        <button className="show-comments-button" onClick={handleShowComments}>Show Comments</button>
        </div>
        {showComments && (
                <CommentModal 
                    onClose={handleCloseComments} 
                    comments={comments} 
                    addComment={handleAddComment} 
                />
        )}
    </>
    )
};

export default KudosCard;