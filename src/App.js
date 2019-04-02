import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './componenets/Header/Header';
import Footer from './componenets/Footer/Footer';
import ListingsPage from './containers/ListingsPage/ListingsPage';
import ListingDetailPage from './containers/ListingDetailPage/ListingDetailPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="main">
          <Switch>
            <Route path="/ListingDetail/:id" component={ListingDetailPage} />
            <Route path="/" component={ListingsPage} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
