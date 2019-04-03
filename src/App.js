import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListingsPage from './containers/ListingsPage/ListingsPage';
import ListingDetailPage from './containers/ListingDetailPage/ListingDetailPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="main">
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={900} classNames="fade" >
                <Switch location={location}>
                  <Route path="/ListingDetail/:id" component={ListingDetailPage} />
                  <Route path="/" component={ListingsPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
