import React, { useState } from "react";
import "./CommentModal.css";

function CommentModal({ onClose, comments, addComment }){

    const [newComment, setNewComment] = useState("");

    const handleAddComment = (e) => {
        e.preventDefault();
        if (newComment.trim() !== "") {
            addComment(newComment);
            setNewComment("");
        }
    };

    return(
        <div className="comment-modal" onClick={onClose}>
            <div className="comment-modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Comments</h3>
                <div className="comments-container">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment-box">
                            {comment}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleAddComment} className="comment-form">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment"
                        className="comment-input"
                    />
                    <button type="submit" className="comment-button">Comment</button>
                </form>
            </div>
        </div>

    )
}
export default CommentModal;
