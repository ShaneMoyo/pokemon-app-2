import React, { Component } from 'react'; 

import api from '../../services/pokemonAPI';
import Resource from '../utils/Resource'; 

class Pokemon extends Component { 
    

    render() { 
        const name = this.props.match.params.name;
        return (
            <Resource 
                fetch={() => api.getPokemonByName(name)} 
                render={({ response: pokemon, error, loading}) => {
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
                }}/>
        );
        
        
        
    }
}

export default Pokemon;