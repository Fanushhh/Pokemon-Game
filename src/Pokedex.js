import React, {Component} from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component{
    
    render(){
        
        

        // for(let i = 0;i < defaultProps.length; i++){
        //     let imgID = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + defaultProps[i].id + ".png";
        //     return (<Pokecard
        //     id= {imgID}
        //     name={defaultProps[i].name}
        //     description={defaultProps[i].type}
        //     exp={defaultProps[i].base_experience}
        //     />);
        // }
        let calcZero = (x) => (x <= 999? `00${x}`.slice(-3):x)
        let title;
        if(this.props.isWinner){
            title = <h1 className = "Pokedex-winner">Winning hand</h1>;
        }else{
            title = <h1 className = "Pokedex-loser">Losing hand</h1>;
        }
        return(
        <div className="Pokedex">
            {title}
            <h4>Total experience : {this.props.exper}</h4>
            <div className="Pokedex-item">
                {this.props.pokemon.map((item) =>
                <Pokecard
                id = {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"  + calcZero(item.id) + ".png"}
                name={item.name}
                description={item.type}
                exp={item.base_experience}
                />)};
                
            </div>
        </div>);
    }
}

export default Pokedex;