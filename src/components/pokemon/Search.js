import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 

class Search extends Component { 
    state = {
        query: '', 
    }

    handleChange = query => this.setState({ query }); 

    handleSubmit = event => { 
        event.preventDefault(); 
        console.log('query: ', this.state.query); 
        this.props.history.push(`/pokemon/${this.state.query}`)
    }
    render() { 
        const { query} = this.state; 
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <fieldset>
                    <input type="text" placeholder="pokemon" value={query} onChange={({ target: { value }}) => this.handleChange(value)}/> 
                    <button type="submit">Search</button>
                </fieldset>
            </form>
        )    
    }
}

export default withRouter(Search)