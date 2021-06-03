import React from 'react';
import TryAgainContainer from '../TryAgainContainer/TryAgainContainer';
import TypingChallengeont from '../TypingChallengeont/TypingChallengeont';
import "./TestContainer.css";


const TestContainer = ({
    selectedParagraph,
    timerStarted,
    timerRemaining,
    Characters,
    Words,
    wpm
}) => {

    return (
        <div className="test-container-component">
            {
                timerRemaining > 0 ? (<div dat-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeont
                        Characters={Characters}
                        Words={Words}
                        wpm={wpm}
                    />
                </div>
                ) :
                    (<div className="try-again-container">
                        <TryAgainContainer Characters={Characters} Words={Words} wpm ={wpm} />
                    </div>)
            }
                


        </div>
    );
};

export default TestContainer;

