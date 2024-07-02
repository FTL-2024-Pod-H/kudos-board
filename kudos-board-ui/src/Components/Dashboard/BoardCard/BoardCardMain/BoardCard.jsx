import React, { useState } from 'react';
import KudosCard from "../KudosCard/KudosCard";
import "../BoardCardMain/BoardCard.css";
import CreateCard from "../CreateCard/CreateCard";

function BoardCard({boardTitle, onClick}){

    const [showCreateCard, setShowCreateCard] = useState(false);
    const [cards, setCards] = useState([]);

    const handleCreateCardClick = () => {
        setShowCreateCard(true);
      };

    const handleCloseCreateCard = () => {
        setShowCreateCard(false);
    }

    const handleAddCard = (newCard) => {
        setCards([...cards, newCard]);
    };

    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, cardIndex) => cardIndex !== index));
      };

    return(
    <>
        {/* <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link> */}
        <h1> Name of Bord</h1>
        {/* <h2>{boardTitle}</h2> */}
        <button className="create-card-button" onClick={handleCreateCardClick} > Create a Card</button>
        {/* {showCreateCard && <CreateCard onClose={handleCloseCreateCard} onAddCard={handleAddCard}/>} */}
        
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
                    onDelete={()=> handleDeleteCard(index)}
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
};

export default BoardCard;