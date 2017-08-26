import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import DefaultPage from './pages/Default';
import CategoryPage from './pages/Category';
import NotFoundPage from './pages/NotFoundPage';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  reducer ,applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Navbar/>
              <Switch>
                <Redirect exact from="/" to="default"/>
                <Route path="/default" component={DefaultPage}/>
                <Route path="/category" render={({history}) => (
                  <CategoryPage/>
                )}/>
                <Route render={NotFoundPage}/>
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
