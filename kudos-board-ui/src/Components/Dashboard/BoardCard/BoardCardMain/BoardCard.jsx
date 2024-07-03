import React, { useState } from 'react';
import axios from "axios";
import KudosCard from "../KudosCard/KudosCard";
import "../BoardCardMain/BoardCard.css";
import CreateCard from "../CreateCard/CreateCard";

function BoardCard({boardId, boardTitle, onClick}){
    const [showCreateCard, setShowCreateCard] = useState(false);
    const [cards, setCards] = useState([]);

    const handleCreateCardClick = () => {
        setShowCreateCard(true);
    };

    const handleCloseCreateCard = () => {
        setShowCreateCard(false);
    }

    const handleAddCard = (newCard) => {
        axios.post(`http://localhost:3000/boards/${boardId}/cards`, newCard)
            .then(response => {
                setCards([...cards, response.data]);
            })
            .catch(error => {
                console.error("The was an error creating the card!", error);
            });
    };

    const handleDeleteCard = (cardId) => {
        axios.delete(`http://localhost:3000/cards/${cardId}`)
            .then(() => {
                setCards(cards.filter(card => card.id !== cardId));
            })
            .catch(error => {
                console.error("There was an error deleting the card!", error);
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/boards/${boardId}/cards`)
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cards!", error);
            });
    }, [boardId]);

    return(
    <>
        <h1 className="kudos-board-title"> Name of Board</h1>
        <button className="create-kudos-card-button" onClick={handleCreateCardClick} > Create a Card</button>
        
        {showCreateCard && (
            <div className="card-form">
            <CreateCard onClose={handleCloseCreateCard} onAddCard={handleAddCard} />
            </div>
        )}
        <div className="cards">
        {cards.map((card, index) => (
                <KudosCard
                    key={index}
                    cardTitle={card.cardTitle}
                    cardMessage={card.cardMessage}
                    gifURL={card.gifURL}
                    cardAuthor={card.cardAuthor}
                    onDelete={()=> handleDeleteCard(card.id)}
                />
            ))}
            </div>
        
        {/* test, mock data card */}
        {/* <KudosCard 
            cardTitle="Test Card"
            cardMessage="creating a test Card"
            gifURL="..." /> */}
    </>
    )
}

export default BoardCard;