import { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import CreateBoard from "../CreateBoard/CreateBoard";
import Board from "../Board/Board";
// import Header from "../../Header/Header";
// import Footer from "../../Footer/Footer";
import Sorting from "../Sorting/Sorting";
// import {Link} from "react-router-dom"

function Dashboard() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [boardCards, setBoardCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const addBoardCard = (newBoardCard) => {
    setBoardCards([...boardCards, newBoardCard]);
  };

  const filteredBoardCards = boardCards.filter((card) => {
    const matchesSearch = card.name
      .toLowerCase()
      .includes(searchInputValue.toLowerCase());
    const matchesCategory =
      selectedCategory == "All" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const deleteBoardCard = (id) => {
    axios
      .delete(`https://kudos-board-yc73.onrender.com/boards/${id}`)
      .then(() => {
        const updateBoardCards = boardCards.filter((card) => card.id !== id);
        setBoardCards(updateBoardCards);
      })
      .catch((error) => {
        console.error("There was an error deleting the board!", error);
      });
  };
  // const viewBoard = (selectedCard) => {
  //     console.log("View Board:", selectedCard);
  // };

  const handleCateoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    axios
      .get("https://kudos-board-yc73.onrender.com/boards")
      .then((response) => {
        setBoardCards(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the boards!", error);
      });
  }, []);

  return (
    <>
      <div className="Dashboard">
        <SearchBar
          searchInputValue={searchInputValue}
          handleOnSearchInputChange={handleOnSearchInputChange}
        />
        <Sorting onCategoryChange={handleCateoryChange} />
        <CreateBoard addBoardCard={addBoardCard} />

        <div className="dashboard-content">
          {filteredBoardCards.map((card) => (
            // <Link to={`/board-card/${card.id}`} key={card.id}>
            <Board
              key={card.id}
              card={card}
              onDelete={deleteBoardCard}
              // onView={viewBoard}
            />
            // </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
