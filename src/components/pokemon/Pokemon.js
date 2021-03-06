import React, { Component } from 'react'; 

import api from '../../services/pokemonAPI';
import Resource from '../utils/Resource'; 

import Picture from '../utils/Picture'; 

class Pokemon extends Component { 
    
    
    render() { 
        const { name } = this.props.match.params;
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
                            <>
                                <h1>We got ourselves a {pokemon.name}</h1>  
                                <Picture url={pokemon.sprites.front_default}/>
                                <Picture url={pokemon.sprites.front_shiny}/>
                                <Picture url={pokemon.sprites.back_default}/>
                            </>
                        )
                    }
                }}/>
        );
        
        
        
    }
}

export default Pokemon;