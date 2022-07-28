import React, {Component} from "react";
import "./Pokecard.css";

class Pokecard extends Component{
    render(){
        return (
            <div className = "Pokecard">
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <div className="Pokecard-img">
                <img src={this.props.id} alt={this.props.img}/>
                </div>
                <p className="Pokecard-desc">Type: {this.props.description}</p>
                <p className="Pokecard-exp"> EXP: {this.props.exp}</p>
            </div>

        );
    }
}

export default Pokecard;