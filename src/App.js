import React from 'react';

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
      <p>Welcome to my pokemon app were I play around with components and break stuff</p>
    </section>
  )

  const Home = () => (
    <section>
      <h1>Welcome to the HOME PAGE!!!!</h1>
      <p>YAAAAAA!!!!</p>
    </section>
  )
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>  
          <Link to="/pokemon">pokemon</Link>  
          <Link to="/About">About</Link>  
        </nav> 
        <Switch> 
          <Route path="/about" render={() => <About/>}/>  
          <Route path="/pokemon" component={PokemonContainer}/>
          <Route path="/" component={() => <Home/>}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
