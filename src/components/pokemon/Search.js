import React, { Component, createRef } from 'react'; 
import { withRouter } from 'react-router-dom'; 

class Search extends Component { 
    state = {
        query: '', 
    }

    componentDidMount() {
        console.log('ref: ', this.ref.current)
        this.ref.current.focus();
    }

    ref = createRef()

    handleChange = query => this.setState({ query }); 

    handleSubmit = event => { 
        event.preventDefault(); 
        this.props.history.push(`/pokemon/${this.state.query}`)
    }


    render() { 
        const { query } = this.state; 
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <fieldset style={{ width: '50%'}}>
                    <input ref={this.ref} type="text" placeholder="pokemon" value={query} onChange={({ target: { value }}) => this.handleChange(value)}/> 
                    <button type="submit">Search</button>
                </fieldset>
            </form>
        )    
    }
}

export default withRouter(Search)