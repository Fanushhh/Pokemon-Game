import React, {Component} from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./Pokedex";

class App extends Component{
    render(){
        <Pokedex />
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);