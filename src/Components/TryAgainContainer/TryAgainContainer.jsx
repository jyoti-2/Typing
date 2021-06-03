import React from 'react';
import "./TryAgainContainer.css";

const TryAgainContainer = ({ Characters, Words, Speed}) => {
    return (
        <div className="try-again-container">
            <h1> Test Results </h1>
            <div className="result-container">
                <p> <b> Characters:</b> {Characters} </p>

                <p> <b>  Words:</b> {Words} </p>

                <p> <b> Speed: </b> {Speed} wpm </p>
           </div>

            <div>
                <button className="end-button start-again-btn">Re-try </button>
                <button
                    onClick={() => {
                        window.open("https://www.facebook.com/sharer.php?id=100027545062053",
                            "facebook-sharer-dialog",
                            "width=800, height=600")
                    }}
                    className="end-button share-btn">
                    Share
                </button>
                <button className="end-button tweet-button"> Tweet </button>
                <button
                    onClick={() => {
                        window.open("https://twitter.com/intent/tweet?text=jyoti14978355",
                            "twitter-sharer-dialog",
                            "width=800, height=600")
                    }}/>

                  
            </div>
        </div>
    );
};

export default TryAgainContainer;
