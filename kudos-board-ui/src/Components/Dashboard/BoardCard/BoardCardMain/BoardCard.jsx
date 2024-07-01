import React, {useState} from "react";
import KudosCard from "../KudosCard/KudosCard";
import "../BoardCardMain/BoardCard.css";
import CreateCard from "../CreateCard/CreateCard";

function BoardCard({boardTitle, onClick}){

    const [showCreateCard, setShowCreateCard] = useState(false);

    const handleCreateCardClick = () => {
        setShowCreateCard(true);
      };

    const handleCloseCreateCard = () => {
        setShowCreateCard(false);
    }
    return(
    <>
        <h1> Name of Bord</h1>
        <button className="create-card-button" onClick={handleCreateCardClick} > Create a Card</button>
        {showCreateCard && <CreateCard onClose={handleCloseCreateCard}/>}
        

        <KudosCard 
            cardTitle="Test Card"
            cardMessage="creating a test Card"
            gifURL="..." />
            
            
    </>
    )
};

{/* <div className="movie-container">
    {parsedData.map((movie, idx)  => (
        <div className="movie-card" key={idx}>
            <MovieCard movieTitle={movie.movieTitle} posterImage={movie.posterImage} movieVoteAverage={movie.movieVoteAverage} onClick={() => setSelectedMovie(movie) } 
                />
                </div>
                ))}  
                <button onClick={handleClick} className="load-button">Load More...</button> 
                </div> */}
                
                        
                
             
            

export default BoardCard;