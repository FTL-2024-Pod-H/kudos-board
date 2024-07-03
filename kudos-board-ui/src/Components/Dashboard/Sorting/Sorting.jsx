import React from "react";
import "./Sorting.css";



function Sorting({onCategoryChange}){

    const handleCateoryChange = (category) => {
        console.log("Selected Category:", category);
        onCategoryChange(category);
    };

    return(
        <>
            <div className="sort-opitons">
                <button className="sort-button" onClick={() => handleCateoryChange("All")}>All</button>
                <button className="sort-button" onClick={() => handleCateoryChange("Recent")}>Recent</button>
                <button className="sort-button" onClick={() => handleCateoryChange("Celebration")}>Celebration</button>
                <button className="sort-button" onClick={() => handleCateoryChange("Thank-you")}>Thank You</button>
                <button className="sort-button" onClick={() => handleCateoryChange("Inspiration")}>Inspiration</button>

            </div>
        </>
    )

}
export default Sorting;