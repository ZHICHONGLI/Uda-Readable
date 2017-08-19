import React, { Component }     from 'react';
import {Route}                  from 'react-router-dom';
import Default                  from './pages/Default';
import Category                 from './pages/Category';
import PostDetail               from './pages/PostDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Default}/>
        <Route path="/category" render={({history}) => (
          <Category />
        )}/>
      </div>
    );
  }
}

export default App;
