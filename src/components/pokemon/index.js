import React, { Component } from 'react'; 
import Search from './Search';

export default class PokemonContainer extends Component { 

    render() { 
        return (
            <section>
                <h1>Pokemon</h1>
                <Search/> 
            </section>
        );
    }
}