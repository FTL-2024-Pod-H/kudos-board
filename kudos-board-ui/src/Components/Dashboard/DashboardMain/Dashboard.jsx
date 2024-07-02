import {useState, useEffect} from "react";
import "./Dashboard.css";
import SearchBar from "../SearchBar/SearchBar";
import CreateBoard from "../CreateBoard/CreateBoard";
import Board from "../Board/Board";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";



function Dashboard () {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [boardCards, setBoardCards] = useState([]);

    const handleOnSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
    };
    const addBoardCard = (newBoardCard) => {
        setBoardCards([...boardCards, newBoardCard]);
    };
    const filteredBoardCards = boardCards.filter(card =>
        card.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    const deleteBoardCard = (id) => {
        const updatedBoardCards = boardCards.filter(card => card.id !== id);
        setBoardCards(updatedBoardCards);
    };
    const viewBoard = (selectedCard) => {
        console.log("View Board:", selectedCard);
    };

    return(
        <>
            <div className="Dashboard">
                <SearchBar 
                    searchInputValue = {searchInputValue}
                    handleOnSearchInputChange={handleOnSearchInputChange}
                />
                <CreateBoard addBoardCard={addBoardCard}/>

                <div className="dashboard-content">
                    {filteredBoardCards.map((card) => (
                        <Board 
                            key={card.id} 
                            card={card} 
                            onDelete={deleteBoardCard}
                            onView={viewBoard}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dashboard;