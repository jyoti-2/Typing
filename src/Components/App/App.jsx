import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";

const totaltime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/8";
class App extends React.Component{
    state = {
        selectedParagraph: "Hello World",
        timerStarted: false,
        timerRemaining: totaltime,
        Characters: 0,
        Words: 0,
        wpm: 0,
    };

    componentDidMount()
    {
        fetch(ServiceUrl)
            .then((response) => response.text())
            .then((data) => {
                this.setState({ selectedParagraph: data })
            });
    }
    render() {
        return (
            <div className="app">
                <Nav />
                <Landing/>
                <ChallengeSection
                selectedParagraph = {this.state.selectedParagraph}
                Words = {this.state.Words}
                Characters = {this.state.Characters}
                wpm={this.state.wpm}
                timerRemaining = {this.state.timerRemaining}
                timerStarted = {this.state.timerStarted}                    
                />
                <Footer />
            </div>
        );
    };
};


export default App;