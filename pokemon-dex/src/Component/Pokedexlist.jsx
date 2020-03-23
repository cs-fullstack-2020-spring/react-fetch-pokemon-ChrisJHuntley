import React, { Component } from "react";

class Pokedexlist extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (

            <div>
                <img src="https://pokeapi.co/api/v2/pokemon/1/" alt="" />
            </div>
        )
    }
}

export default Pokedexlist