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
    <section style={{ padding: '10px', width: '80%', backgroundColor: 'white', margin: 'auto', borderRadius: '20px' }}>
      <h1>About my pokemon app</h1>
      <p>Welcome to my pokemon app were I play around with components and break stuff</p>
    </section>
  )

  const Home = () => (
    <section style={{ padding: '10px', width: '80%', backgroundColor: 'white', margin: 'auto', borderRadius: '20px' }}>
      <h1>Welcome to the HOME PAGE!!!!</h1>
      <p>YAAAAAA!!!!</p>
    </section>
  )
  return (
    <div className="App" style={{ backgroundColor: 'red', height: '100vh' }}>
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
