/**Manages modal overlay for creating a new board card**/
import React, {useState} from "react";
import "./CreateBoard.css";

const CreateBoard = ({addBoardCard}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Recent');
    const [author, setAuthor] = useState('');
    
    const handleOpenModal = () => {
        console.log("Opening modal");
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        console.log("Closing modal");
        setIsOpen (false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        const randomImageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;

        const newBoardCard = {
            id: Math.random().toString(36).substr(2, 9),
            title: title,
            category: category,
            author: author,
            imageUrl: randomImageUrl,
        };

        addBoardCard(newBoardCard);
        
        setTitle('');
        setCategory('Recent');
        setAuthor('');
        setIsOpen(false);
    };

    return (
        <div className="create-card">
            <button className="board-button"onClick={handleOpenModal}>Create New Board</button>
            {isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <h2>Create New Board</h2> 
                        <form onSubmit={handleSubmit}>
                        <label>
                                Title: 
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Category: 
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="Recent">Recent</option>
                                    <option value="Celebration">Celebration</option>
                                    <option value="Thank-you">Thank You</option>
                                    <option value="Inspiration">Inspiration</option>
                                </select>
                            </label>
                            <label>
                                Author:
                                <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                />
                            </label>
                            <button type="submit">Create</button>
                            <button onClick={handleCloseModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateBoard;