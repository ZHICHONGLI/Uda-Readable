import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Default from './pages/Default';
import Category from './pages/Category';
import PostDetail from './pages/PostDetail';
import Navbar from './components/Navbar';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  reducer
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Navbar/>
              <Route exact path="/" component={Default}/>
              <Route path="/category" render={({history}) => (
                <Category/>
              )}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
