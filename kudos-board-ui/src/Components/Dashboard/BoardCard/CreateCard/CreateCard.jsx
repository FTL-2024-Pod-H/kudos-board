import React from "react";
import "../CreateCard/CreateCard.css"

function CreateCard({onClose}){
    return(
        <>
            {/* <h2>test</h2> */}
            <div className="modal" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <button className="close-button" onClick={onClose}>X</button>
                    </div>
                    <h2> Create a New Card</h2>
                    <div className="modal-body">
                        <form className="new-card-form">
                            <input className="input-box" type="text" placeholder="Enter card title" />
                            <input className="input-box" type="text" placeholder="Enter card description" />
                            <input className="input-box" type="text" placeholder="Search GIFs..." />

                            <button className="search-button" type="search">Search</button>
                            
                            <input className="input-box" type="text" placeholder="Enter GIF URL" />
                            <button className="copy-gif-url-button" type="copy-gif-url-button">Copy GIF URL</button>

                            <input className="input-box" type="text" placeholder="Enter owner (optional)" />
                            <button className="submit" value="submit">Create Card</button>
                        </form>

                    </div>
                </div>
            </div>


         </>

    )

};

export default CreateCard;

