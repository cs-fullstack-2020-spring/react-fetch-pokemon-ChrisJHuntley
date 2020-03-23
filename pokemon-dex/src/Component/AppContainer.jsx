import React, { Component } from "react";
import Pokedexlist from "./Pokedexlist";
 

class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
pokemon:[]

        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        console.log('linked in');

        const Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
        const json = await Response.json();
        this.setState({ datalist: json })


    }
    // Method render this component
    render() {
        console.log(this.state);
        return (
            <div className='grid-container'>
                {this.state.pokemon.map((the) => {

                    return (
                        <div>
                    <p>{`PokemonName: ${the.name}`}</p>
                    <Pokedexlist/>
                    </div>

                        
                        )})}
                </div>


        )
            
            
            
            
    }
}
export default AppContainer