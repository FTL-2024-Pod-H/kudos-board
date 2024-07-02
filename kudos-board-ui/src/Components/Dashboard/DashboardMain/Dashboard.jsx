import {useState, useEffect} from "react";
import "./Dashboard.css";
import SearchBar from "../SearchBar/SearchBar";
import CreateBoard from "../CreateBoard/CreateBoard";
import Board from "../Board/Board";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Sorting from "../Sorting/Sorting";



function Dashboard () {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [boardCards, setBoardCards] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleOnSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
    };
    const addBoardCard = (newBoardCard) => {
        setBoardCards([...boardCards, newBoardCard]);
    };
    const filteredBoardCards = boardCards.filter(card => {
        const matchesSearch = card.title.toLowerCase().includes(searchInputValue.toLowerCase());
        const matchesCategory = selectedCategory == "All" || card.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    const deleteBoardCard = (id) => {
        const updatedBoardCards = boardCards.filter(card => card.id !== id);
        setBoardCards(updatedBoardCards);
    };
    const viewBoard = (selectedCard) => {
        console.log("View Board:", selectedCard);
    };

    const handleCateoryChange = (category) => {
        setSelectedCategory(category);
    };

    return(
        <>
            <div className="Dashboard">
                <SearchBar 
                    searchInputValue = {searchInputValue}
                    handleOnSearchInputChange={handleOnSearchInputChange}
                />
                <Sorting onCategoryChange={handleCateoryChange}/>
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