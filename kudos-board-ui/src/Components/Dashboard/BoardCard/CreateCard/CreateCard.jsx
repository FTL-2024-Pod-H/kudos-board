import React, { useState } from 'react';
import "../CreateCard/CreateCard.css"
import KudosCard from "../KudosCard/KudosCard";


function CreateCard({onClose, onAddCard}){

    const [cardTitle, setCardTitle] = useState("");
    const [cardMessage, setCardMessage] = useState("");
    const [gifURL, setGifURL] = useState("");
    const [cardAuthor, setCardAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCard({ cardTitle, cardMessage, gifURL, cardAuthor });
        onClose(); 
    };
    
    return(


        <>
            <div className="kudos-modal" onClick={onClose}>
                <div className="kudos-modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2> Create a New Card</h2>
                    <div className="kudos-modal-body">
                        <form className="new-card-form" onSubmit={handleSubmit}>
                            <input className="input-box" type="text" placeholder="Enter card title" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} required/>
                            <input className="input-box" type="text" placeholder="Enter card description" value={cardMessage} onChange={(e) => setCardMessage(e.target.value)} required/>
                            <input className="input-box" type="text" placeholder="Search GIFs..." value={gifURL} onChange={(e) => setGifURL(e.target.value)} />

                            <button className="search-button" type="button">Search</button>
                            
                            <input className="input-box" type="text" placeholder="Enter GIF URL" value={gifURL} onChange={(e) => setGifURL(e.target.value)}/>
                            <button className="copy-gif-url-button" type="button">Copy GIF URL</button>

                            <input className="input-box" type="text" placeholder="Enter owner (optional)" value={cardAuthor} onChange={(e) => setCardAuthor(e.target.value)} />
                            <button className="submit" type="submit" >Create Card</button>
                        </form>

                    </div>
                </div>
            </div>


         </>

    )

};

export default CreateCard;

