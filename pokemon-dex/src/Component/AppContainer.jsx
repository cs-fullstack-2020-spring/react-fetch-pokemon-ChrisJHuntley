import React, { Component } from "react";
import Pokedexlist from "./Pokedexlist";


class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: []
        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        console.log('linked in');

        const Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
        const json = await Response.json();
        // console.log(json) // printing your json variable to the console is a useful check bc json is an object - not an array
        this.setState({ datalist: json }) // looks like you copied this from the IC/lecture - your property of state is pokemon not datalist


    }
    // Method render this component
    render() {
        console.log(this.state);
        // you should be passing something to the child element pokedex if you want it to render something from your map
        return (
            <div className='grid-container'>
                {this.state.pokemon.map((the) => {

                    return (
                        <div>
                            <p>{`PokemonName: ${the.name}`}</p>
                            <Pokedexlist />
                        </div>


                    )
                })}
            </div>


        )




    }
}
export default AppContainer