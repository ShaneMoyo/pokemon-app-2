import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
} from 'react-router-dom'; 
import PokemonContainer from './components/pokemon'; 

function App() {
  const About = () => (
    <section>
      <h1>About my pokemon app</h1>
      <p>Welcome to my pokemon app were I play around with components and breack stuff</p>
    </section>
  )
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>  
        <Link to="/About">About</Link>  
      </nav> 
      <Router>
        <Switch> 
          <Route path="/about" render={() => <About/>}/>  
          <Route path="/" component={PokemonContainer}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
