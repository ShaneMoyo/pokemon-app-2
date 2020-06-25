import React from 'react'; 

export default class Picture extends React.Component { 
    state = { 
        loading: true
    }
    handleImageLoad = () => {
        this.setState({ loading: false}); 
    }
    render() {
        const { loading } = this.state
        return (
        <div>
            <p style={{ display: loading ? 'block': 'none'}}>Loading...</p>
            <img style={{ display: loading ? 'none': 'block'}}
            alt="img"
            src={this.props.url}
            onLoad={() => this.handleImageLoad()}/>
        </div>
        );
    }
}