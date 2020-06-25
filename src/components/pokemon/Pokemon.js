import React, { Component } from 'react'; 

import api from '../../services/pokemonAPI';

class Pokemon extends Component { 
    state = { loading: true, error: false }
    async componentDidMount() { 
        const name = this.props.match.params.name;
        try {
            const pokemon = await api.getPokemonByName(name); 
            this.setState({ pokemon, loading: false }); 
        } catch (error) { 
            console.log('errror: ', error); 
            this.setState({ error: true, loading: false }); 
        }
    }

    render() { 
        const { error, loading, pokemon } = this.state;
        if(loading) {
            return (
                <section>
                    <h1> still waiting on theses pokemans....</h1>   
                </section>
            ); 
        } else if(error) {
            return (
                <section>
                    <h1> The pokemons are not coming... Sorry</h1>   
                </section>
            ); 
        } else if(pokemon){ 
            return (
                <section>
                    <h1>We got ourselves a {pokemon.name}</h1>  
                    <img alt="pkmn" src={pokemon.sprites.front_default}/>
                </section>
            )
        }
        
    }
}

export default Pokemon;