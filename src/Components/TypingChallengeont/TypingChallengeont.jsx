import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import "./TypingChallengeont.css";

    
const TypingChallengeont = ({selectedParagraph,
    timerStarted,
    timerRemaining,
    Characters,
    Words,
    wpm }) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardname= "Words" cardvalue ={Words}/>
                <ChallengeDetailsCard cardname= "Characters" cardvalue ={Characters}/>
                <ChallengeDetailsCard cardname= "Speed" cardvalue ={wpm}/>

            </div>
            <div className="typewriter-content">
                <TypingChallenge
                    timerStarted ={timerStarted}                    
                    timerRemaining = {timerRemaining}
                    selectedParagraph={selectedParagraph} />
            </div>
        </div>
    );
};


export default TypingChallengeont;