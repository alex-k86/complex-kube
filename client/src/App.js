import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div>
            <Link to="/"  className="App-link">Home</Link>
            <p></p>
            <Link to="/otherpage"  className="App-link">Other Page</Link>
            <p></p>
          </div>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
