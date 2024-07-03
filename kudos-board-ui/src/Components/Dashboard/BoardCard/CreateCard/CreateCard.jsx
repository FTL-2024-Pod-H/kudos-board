import React, { useState } from "react";
import "../CreateCard/CreateCard.css";
import KudosCard from "../KudosCard/KudosCard";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

function CreateCard({ onClose, onAddCard }) {
  const [cardTitle, setCardTitle] = useState("");
  const [cardMessage, setCardMessage] = useState("");
  const [gifURL, setGifURL] = useState("");
  const [cardAuthor, setCardAuthor] = useState("");
  const [searchGif, setSearchGif] = useState("");
  const [gifs, setGifs] = useState([]);
  //   const [clickedGifId, setClickedGifId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({ cardTitle, cardMessage, gifURL, searchGif, cardAuthor });
    onClose();
  };

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchGif = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: apiKey,
          q: searchGif,
          limit: 6,
          offset: 6,
          rating: "g",
          lang: "en",
          bundle: "messaging_non_clips",
        },
      });
      //   const data = response.json();
      //   setSearchGifs(response.data.data);
      setGifs(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="kudos-modal" onClick={onClose}>
        <div
          className="kudos-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2> Create a New Card</h2>
          <div className="kudos-modal-body">
            <form className="new-card-form" onSubmit={handleSubmit}>
              <input
                className="input-box"
                type="text"
                placeholder="Enter card title"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
              />
              <input
                className="input-box"
                type="text"
                placeholder="Enter card description"
                value={cardMessage}
                onChange={(e) => setCardMessage(e.target.value)}
              />
              <input
                className="input-box"
                type="text"
                placeholder="Search GIFs..."
                value={searchGif}
                onChange={(e) => setSearchGif(e.target.value)}
              />
              <div className="gif-results">
                {gifs.map((gif) => (
                  <img
                    key={gif.id}
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                    // className={clickedGifId === gif.id ? "clicked" : ""}
                    onClick={() => {
                      setGifURL(gif.images.fixed_height.url);
                      //   setClickedGifId(gif.id);
                      //   console.log(clickedGifId);
                    }}
                  />
                ))}
              </div>
              <button
                className="search-button"
                type="button"
                onClick={fetchGif}
              >
                Search
              </button>

              <input
                className="input-box"
                type="text"
                placeholder="Enter GIF URL"
                value={gifURL}
                onChange={(e) => setGifURL(e.target.value)}
              />
              <button className="copy-gif-url-button" type="button">
                Copy GIF URL
              </button>

              <input
                className="input-box"
                type="text"
                placeholder="Enter owner (optional)"
                value={cardAuthor}
                onChange={(e) => setCardAuthor(e.target.value)}
              />
              <button className="submit" type="submit">
                Create Card
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCard;
