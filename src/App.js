import axios from "axios";
import React from "react";
import './App.css';
class App extends React.Component {

    state = { advice:''};

    componentDidMount(){
        this.fetchAdvices();
    }

    fetchAdvices = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            //console.log(advice);
            this.setState({ advice: advice});
        })

        .catch((error) => {
        console.log(error);
        })
    }

    render(){

        const {advice} = this.state;
        return(
            //<h1>{advice}</h1>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvices}>
                        <span>for more Advice</span>
                    </button>
                </div>
            </div>
        );
    }


}

export default App;