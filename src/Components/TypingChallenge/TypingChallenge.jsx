import React from 'react';
import "./TypingChallenge.css";

const TypingChallenge = ({selectedParagraph, timerRemaining = 60 , timerStarted}) => {
    return (
        <div>
            <div className="typing-challenge">
                <div className="timer-container">
                    <p className="timer"> 00 :
                     {timerRemaining > 10 ? timerRemaining : `0${timerRemaining}`}
                    </p>
                    <p className="timer-info">
                        {!timerStarted && "Start typing to start the test!"}
                    
                        </p>
                  
                </div>

                <div className="text-area-container">
                    <div className="text-area-left">
                        <div className="text-area test-paragraph">
                             {selectedParagraph}
                        </div>
                                 
                         
                        <div className="text-area-right">
                            <textarea
                                className="textarea"
                                 placeholder = "Start typing here">
                                </textarea>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        
    );
};

export default TypingChallenge;