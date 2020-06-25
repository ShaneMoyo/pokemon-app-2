import React, { Component } from 'react'; 

class Resource extends Component { 
    state = { loading: true, error: false }
    
    componentDidMount() { 
        this.fetchRescource();
    }

     async fetchRescource() {
        try {
            const response = await this.props.fetch(); 
            this.setState({ response, loading: false }); 
        } catch (error) { 
            console.log('errror: ', error); 
            this.setState({ error: true, loading: false }); 
        }
    }

    render() { 
        return this.props.render(this.state); 
    }
}

export default Resource;