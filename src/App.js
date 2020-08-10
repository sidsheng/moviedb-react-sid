import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MovieNavbar from './components/MovieNavbar';

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Router>
            <MovieNavbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
