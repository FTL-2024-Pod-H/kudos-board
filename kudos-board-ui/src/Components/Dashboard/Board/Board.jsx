/**Renders individual board cards based on the data passed to it**/

import React from "react";
import "./Board.css";

const Board = ({card, onDelete, onView}) => {
    
    const handleDelete= () => {
        console.log(card.id);
        onDelete(card.id);
    };

    const handleView = () => {
        onView(card);
    };
    return (
        <div className="board-card">
            <img src={card.imageUrl} alt={card.title}/>
            <div>
                <h3>{card.title}</h3>
                <p>{card.category}</p>
                <p>By: {card.author}</p>
                <div className="button-container">
                    <button onClick={handleDelete} className="delete-button">
                        Delete
                    </button>
                    <button onClick={handleView} className="view-button">
                        View Board
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Board;