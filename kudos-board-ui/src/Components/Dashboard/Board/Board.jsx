/**Renders individual board cards based on the data passed to it**/

import React from "react";
import "./Board.css";
import { Link } from 'react-router-dom';
import BoardCard from "../BoardCard/BoardCardMain/BoardCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Board = ({card, onDelete, onView}) => {
    
    const handleDelete= () => {
        console.log(card.id);
        onDelete(card.id);
    };

    const handleView = () => {
        onView(card);
    };
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/board-card" element={<BoardCard card={card} />} />
        //     </Routes>
            <div className="board-card">
                <img src={card.imageUrl} alt={card.title}/>
                <div>
                    <h3>{card.title}</h3>
                    <p>{card.category}</p>
                    <p>By: {card.author}</p>
                    <div className="button-container">
                        <button onClick={handleDelete} className="delete-button">
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
                        <Link to="/board-card" className="view-button-link">
                            <button onClick={handleView} className="view-button">
                                
                                View Board
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        // </BrowserRouter>
    );
};

export default Board;