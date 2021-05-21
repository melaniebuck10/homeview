//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import ProtectedRoute from './components/ProtectedRoute';

import { signOut, verify } from './services/authentication';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import HomeWithoutAuthentication from './views/HomeWithoutAuthentication';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  state = {
    user: null,
    loaded: false
  };

  async componentDidMount() {
    const user = await verify();
    this.handleUserChange(user);
    this.setState({ loaded: true });
  }

  handleUserChange = (user) => {
    this.setState({ user });
  };

  handleSignOut = async () => {
    await signOut();
    this.handleUserChange(null);
  };

  render() {
    const user = this.state.user;
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <title>Homeview - Handle your homes</title>
          </Helmet>
          <Header user={user} onSignOut={this.handleSignOut} />
          <Footer />
          {this.state.loaded && (
            <Switch>
              <Route path="/" component={HomeWithoutAuthentication} exact />
              <ProtectedRoute
                path="/sign-in"
                render={(props) => (
                  <SignIn {...props} onUserChange={this.handleUserChange} />
                )}
                authorized={!user}
                redirect="/home"
                exact
              />
              <ProtectedRoute
                path="/sign-up"
                render={(props) => (
                  <SignUp {...props} onUserChange={this.handleUserChange} />
                )}
                authorized={!user}
                redirect="/home"
                exact
              />
              <ProtectedRoute
                path="/home"
                render={(props) => <Home {...props} user={user} />}
                authorized={user}
                redirect="/"
                exact
              />
            </Switch>
          )}
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;