import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import DefaultPage from './pages/Default';
import CategoryPage from './pages/Category';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  reducer
);

const pageNotFound =  () => (
  <div className="misc-page">
    <h1>Not Found</h1>
  </div>
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
                <Route render={()=><pageNotFound/>}/>
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
