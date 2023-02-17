import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './pages/Game';
import GameSearch from './pages/SearchResults';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route 
                path="/thoughts/:thoughtId"
                element={<SingleThought />}
              />
              <Route
                path="/:gameId"
                element={<Game />}
              />
              <Route
                path="/search/:gameName"
                element={<GameSearch />}
              />

            </Routes>
          </div>
          <footer className='footer'>
  <p>
    <a className='btn btn-primary' href="https://github.com/ogwalrus/Game-Info-App">Created by: Tom, Isaac, Mekael, and Nick</a>
  </p>
  <p><a href='https://www.youtube.com/watch?v=tHYJWn2jLaM'>Customer Support</a></p>
</footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
