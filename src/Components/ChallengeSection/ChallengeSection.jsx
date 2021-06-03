import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import "./ChallengeSection.css";


const ChallengeSection = ({
    selectedParagraph, timerStarted, timerRemaining, Characters, Words, wpm
    }) => {
        return (
            <div className="challenge-section-container">
                <h1 data-aos="fade-down" className="challenge-section-header">
                    Take a speed test now!!</h1>
                <TestContainer selectedParagraph ={selectedParagraph} timerRemaining={timerRemaining} timerStarted ={timerStarted}  Characters={Characters} Words={Words} Speed={wpm}/>
            </div>
            
        );
    };
    export default ChallengeSection;

