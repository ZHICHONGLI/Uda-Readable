import React, { Component }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Default                  from './pages/Default';
import Category                 from './pages/Category';
import PostDetail               from './pages/PostDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/category" render={({history}) => (
              <Category/>
            )}/>
            <Route exact path="/" component={Default}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
