class Pokecard extends Component{
    render(){
        return (
            <div className = "Pokecard">
                <id className="Pokecard-id">{props.id}</id>
                <h5 className="Pokecard-name">{props.name}</h5>
                <img src= {"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + {id} + ".png"} />
                <p>{props.description}</p>
                <p>{props.exp}</p>
            </div>

        );
    }
}

export default Pokecard;