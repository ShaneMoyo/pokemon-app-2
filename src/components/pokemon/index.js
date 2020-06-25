import React, { Component } from 'react'; 
import { 
    Route, Switch
} from 'react-router-dom'; 
import Search from './Search';
import Pokemon from './Pokemon'; 

export default class PokemonContainer extends Component { 

    render() { 
        return (
            <section style={{ padding: '10px', width: '80%', backgroundColor: 'white', margin: 'auto', borderRadius: '20px'}}>
                <h1>Pokemon</h1>
                <Search/> 
                <Switch> 
                    <Route exact path="/pokemon/:name" render={(props) => <Pokemon key={props.match.params.name} {...props}/> }/>
                </Switch>
            </section>
        );
    }
}